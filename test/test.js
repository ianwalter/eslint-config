import test from 'ava'
import { CLIEngine } from 'eslint'

test('pass', t => {
  const cli = new CLIEngine()
  const { results: [pass] } = cli.executeOnFiles(['test/fixtures/pass.js'])
  t.is(pass.errorCount, 0)
})

test('fail', t => {
  const cli = new CLIEngine()
  const { results: [fail] } = cli.executeOnFiles(['test/fixtures/fail.js'])
  t.log(fail)
  t.is(fail.errorCount, 10)
})
