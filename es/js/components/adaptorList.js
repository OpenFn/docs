import { compareVersions } from 'compare-versions';
import adaptorTags from '../../../adaptors/packages/versions.json';
import legacyAdaptors from '../../../generate-adaptors/legacyAdaptors.json';

export function generateList() {
  const masterList = {};

  adaptorTags
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

  return sortedArray;
}
