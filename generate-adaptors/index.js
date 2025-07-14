const axios = require('axios');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const versions = [];

async function listVersions(next) {
  const url = next || `https://api.github.com/repos/OpenFn/adaptors/tags`;

  return axios
    .get(url)
    .then(response => {
      const { headers, data } = response;

      versions.push(...data);

      const { link } = headers;
      const nextLink = link.split(',').find(link => link.includes('next'));

      if (nextLink) {
        const newUrl = nextLink.substring(
          nextLink.indexOf('<') + 1,
          nextLink.lastIndexOf('>')
        );
        return listVersions(newUrl);
      }
    })
    .catch(function (error) {
      console.log(`Request to ${url} failed`, error);
      console.log(
        'Failed to list versions. (Maybe you got rate limited?) Returning an empty array for now.'
      );
      return [];
    });
}

async function loadAdaptorsDocsFromGithub() {
  const apiUrl =
    'https://raw.githubusercontent.com/OpenFn/adaptors/docs/docs/docs.json';

  console.log('Loading adaptors docs from OpenFn/adaptors');
  return axios
    .get(apiUrl)
    .then(function (response) {
      console.log('Done ✓');
      const docs = response.data;

      console.log(
        'Producing docs for:',
        docs.map(x => x.name)
      );

      return docs;
    })
    .catch(function (error) {
      console.log(`Request to ${url} failed`, error);
      console.log(
        'Failed to list adaptors. (Maybe you got rate limited?) Returning an empty array for now.'
      );
      return [];
    });
}

async function loadAdaptorsDocsFromMonorepo(monorepoPath) {
  console.log('Loading adaptors docs from adaptors monorepo', monorepoPath);

  try {
    const raw = fs.readFileSync(monorepoPath, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading adaptor docs from monerepo');
    console.error(e);
    return [];
  }
}

const filePaths = [];

function pushToPaths(name) {
  filePaths.push({
    name: name,
    docsId: `packages/${name}-docs`,
    readmeId: `packages/${name}-readme`,
    changelogId: `packages/${name}-changelog`,
    configurationSchemaId: `packages/${name}-configuration-schema`,
  });
}

function generateJsDoc(a) {
  // Add line break before </dt> tags and escape curly braces outside of code blocks
  let docsContent = JSON.parse(a.docs).replace(/<\/dt>/g, '\n</dt>');
  
  // Split content by code blocks (both inline ` and multi-line ```)
  const codeBlockRegex = /(```[\s\S]*?```|`[^`]*`)/g;
  const parts = docsContent.split(codeBlockRegex);
  
  // Escape curly braces only in non-code parts (odd indices are code blocks)
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) { // Non-code parts
      parts[i] = parts[i].replace(/{/g, '\\{').replace(/}/g, '\\}');
    }
  }
  
  docsContent = parts.join('');

  return `---
title: ${a.name}@${a.version}
id: ${a.name}-docs
keywords:
  - adaptor
  - ${a.name}
  ${a.functions.length > 0 ? '- ' : ''}${a.functions.join('\r\n  - ')}
---

${docsContent}`;
}

function generateChangelog(a) {
  return `---
title: ${a.name} changelog
id: ${a.name}-changelog
keywords:
  - adaptor
  - changelog
  - ${a.name}
---

# Changelog for the ${a.name} adaptor

${JSON.parse(a.changelog)}`;
}

function generateReadme(a) {
  return `---
title: ${a.name} developer readme
id: ${a.name}-readme
keywords:
  - adaptor
  - readme
  - ${a.name}
---

# ${a.name} Adaptor developer README.md

Source: https://github.com/OpenFn/adaptors/tree/main/packages/${a.name}

${JSON.parse(a.readme)}`;
}

const sampleConfiguration = json => {
  let { properties, required } = json;

  const conf = {};
  if (properties && typeof required === 'undefined') {
    Object.keys(properties).forEach((key, index) => {
      conf[key] = properties[key].examples?.[0];
      return conf;
    });
  }
  if (properties && required) {
    required.forEach((key, index) => {
      conf[key] = properties[key]?.examples?.[0];
      return conf;
    });
  }
  return '```json \n' + JSON.stringify(conf, null, 4) + '\n```';
};

function generateConfigurationSchema(a) {
  return `---
title: Config for ${a.name}
id: ${a.name}-configuration-schema
keywords:
  - adaptor
  - configuration-schema
  - ${a.name}
---

${configurationPageBody(a)}
`;
}

function configurationPageBody(a) {
  if (typeof a['configuration-schema'] == 'string') {
    return `No configuration schema has been defined for the ${a.name} adaptor.`;
  }
  return `
  Jobs that use the \`${a.name}\` adaptor may require authentication. A
  "credential" for the \`${a.name}\` adaptor will follow the schema below. When
  using the CLI, you can set up your own \`state.configuration\` by using the
  sample below.

  ## Sample Configuration

  Paste this into the \`configuration\` key of your \`state.json\` file and
  modify the values to run jobs locally.
  
  ${displaySchema(a['configuration-schema'])}

  ## Full Schema

  The full configuration schema describes each attribute of the credential and
  notes those that are required.

  ${displaySchemaFullSchema(a['configuration-schema'])}
  `;
}

function displaySchema(schema) {
  if (typeof schema == 'string') return schema;
  return sampleConfiguration(schema);
}

function displaySchemaFullSchema(schema) {
  if (typeof schema == 'string') return schema;
  return '```json \n' + JSON.stringify(schema, null, 4) + '\n```';
}

async function buildAdaptors(monorepoPath) {
  const adaptors = await (monorepoPath
    ? loadAdaptorsDocsFromMonorepo(monorepoPath)
    : loadAdaptorsDocsFromGithub());

  console.log('Generating adaptors docs via JSDoc...');
  adaptors.map(a => {
    if (!a.name) {
      return;
    }

    const docsBody = generateJsDoc(a);
    const readmeBody = generateReadme(a);
    const changelogBody = generateChangelog(a);

    const configurationSchemaBody = generateConfigurationSchema(a);

    pushToPaths(a.name);

    fs.writeFileSync(`./adaptors/packages/${a.name}-docs.md`, docsBody);
    fs.writeFileSync(`./adaptors/packages/${a.name}-readme.md`, readmeBody);
    fs.writeFileSync(
      `./adaptors/packages/${a.name}-changelog.md`,
      changelogBody
    );
    fs.writeFileSync(
      `./adaptors/packages/${a.name}-configuration-schema.md`,
      configurationSchemaBody
    );

    fs.writeFileSync(
      './adaptors/packages/publicPaths.json',
      JSON.stringify(filePaths, null, 2)
    );

    console.log(`Done ${a.name} ✓`);
  });

  console.log('Done all adaptors ✓');
}

module.exports = function (context, { apiUrl }) {
  return {
    name: 'adaptors',
    extendCli(cli) {
      cli
        .command('generate-adaptors')
        .description('Generate documentation for OpenFn adaptors')
        .option(
          '-m',
          '--monorepo <path>',
          'use the adaptors monorepo to load docs metadata'
        )
        .option('-w', '--watch', 'watch the monorepo docs file for changes')
        .action(async cmd => {
          fs.existsSync('./adaptors/packages') ||
            fs.mkdirSync('./adaptors/packages');

          let useMonorepo = false;
          let watchMonorepo = false;

          // the monorepo option is suppposed to be written to cmd
          // ... but it's not. So we do it ourselves
          for (const a of process.argv) {
            if (/(-m|--monorepo)/.test(a)) {
              useMonorepo = true;
            } else if (/(-w|--watch)/.test(a)) {
              useMonorepo = true;
              watchMonorepo = true;
            }
          }

          if (!useMonorepo) {
            console.log('Getting version list...');
            await listVersions();

            console.log(`Found ${versions.length} monorepo versions.`);

            fs.writeFileSync(
              './adaptors/packages/versions.json',
              JSON.stringify(versions, null, 2)
            );
          } else {
            console.warn('Skipping version list as loading from monorepo');
          }

          let monorepoPath = false;
          if (useMonorepo) {
            if (process.env.OPENFN_ADAPTORS_REPO) {
              monorepoPath = path.resolve(
                process.env.OPENFN_ADAPTORS_REPO,
                // Read from tmp not from docs, because otherwise the adaptor
                // build script won't work properly
                'tmp/docs.json'
              );
            } else {
              if (!monorepoPath) {
                throw new Error(`ERROR: monorepo path not found.
                
Make sure OPENFN_ADAPTORS_REPO is set in your env`);
              }
            }
          }

          await buildAdaptors(monorepoPath);
          if (watchMonorepo) {
            const watcher = chokidar.watch(monorepoPath, {
              persistent: true,
            });
            watcher.on('change', () => {
              // change may fire before the write has fully finished
              setTimeout(() => {
                buildAdaptors(monorepoPath);
              }, 500);
            });
          }
        });
    },
  };
};
