import React from 'react';
import { compareVersions } from 'compare-versions';
import adaptorTags from '../../../adaptors/packages/versions.json';
import legacyAdaptors from '../../../generate-adaptors/legacyAdaptors.json';
import publicPaths from '../../../adaptors/packages/publicPaths.json';

const AdaptorList = () => {
  const masterList = {};

  const newAdaptors = adaptorTags
    .filter(t => t.name.includes('language-'))
    .map(t => {
      const tagName = t.name;
      const module = tagName.substring(
        tagName.indexOf('-') + 1,
        tagName.lastIndexOf('@')
      );

      const version = tagName.split('@')[2];

      const url = `https://github.com/OpenFn/adaptors/tree/%40openfn/language-${module}%40${version}/packages/${module}`;

      return { module, version, url };
    })
    .forEach(av => {
      masterList[av.module] = {
        module: av.module,
        versions: {
          ...masterList[av.module]?.versions,
          [av.version]: { version: `v${av.version}`, url: av.url },
        },
      };
    });

  legacyAdaptors.forEach(a => {
    masterList[a.module] = {
      module: masterList[a.module]?.module || a.module,
      versions: { ...masterList[a.module]?.versions },
    };

    const oldVersions = a.versions.filter(v => {
      if (!a.npm) return true;
      return compareVersions(v.substring(1), a.npm.substring(1)) == -1;
    });

    oldVersions.forEach(v => {
      masterList[a.module].versions[v] = {
        version: v,
        url: `https://www.github.com/openfn/language-${a.module}/tree/${v}`,
      };
    });
  });

  const sortedArray = Object.values(masterList)
    .sort((a, b) => (a.module > b.module ? 1 : b.module > a.module ? -1 : 0))
    .map(a => ({ ...a, versions: Object.values(a.versions) }));

  return (
    <div>
      <ul>
        {sortedArray.map(a => {
          return (
            <details>
              <summary>
                {publicPaths.find(p => p.name == a.module) ? (
                  <a
                    href={`/adaptors/${
                      publicPaths.find(p => p.name == a.module).docsId
                    }`}
                  >
                    {a.module}
                  </a>
                ) : (
                  a.module
                )}
              </summary>
              <ul>
                {a.versions
                  .sort((a, b) => compareVersions(b.version, a.version))
                  .map(v => {
                    return (
                      <li>
                        <a href={v.url} target="_blank">
                          {v.version}
                        </a>{' '}
                      </li>
                    );
                  })}
              </ul>
            </details>
          );
        })}
      </ul>
    </div>
  );
};

export default AdaptorList;
