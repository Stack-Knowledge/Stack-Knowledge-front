import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../../client/src/components/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
    '../../client/src/PageContainer/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
    '../../admin/src/components/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
    '../../admin/src/PageContainer/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/common/src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/common/src/PageContainer/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
