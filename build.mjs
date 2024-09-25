import * as path from "path";

/**
 * 
 * @param {{dev: boolean}}} dev 
 * @returns {Promise<void>}
 */
async function build(options) {
  let data = { options, ...await getInfo() };
  let subPackages = await getSubPackages(data);
  await makeSureNodeModulesIsGone(subPackages);
  await writePackagesPackageJson(subPackages);
  await installModules();
  await build;
}

asnyc function









  /**
   * @returns {Promise<number>}
   */
  async function main() {
    try {
      let opts = { dev: false };
      for (let arg of process.argv) {
        if (arg == "dev") opts.dev = true;
      }
      await build(opts);
    } catch (error) {
      console.error(error);
      if (error.errno && error.errno !== 0) return error.errno;
      return -1;
    }
  }

build().then(process.exit);