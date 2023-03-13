import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir'
import { execaCommand } from 'execa'
import outputFiles from 'output-files'

export default tester(
  {
    works: async () => {
      await outputFiles({
        'eslint-config.js': endent`
          export default {
          	"env": {
          			"browser": true,
          			"es2021": true
          	},
          	"extends": "eslint:recommended",
          	"overrides": [
          	],
          	"parserOptions": {
          			"ecmaVersion": "latest",
          			"sourceType": "module"
          	},
          	"rules": {
          	}
          }
        `,
        'index.js': endent`
          const foo = 'bar'
          console.log(foo)

        `,
      })
      await execaCommand('eslint --config eslint-config.js index.js')
    },
  },
  [testerPluginTmpDir()],
)
