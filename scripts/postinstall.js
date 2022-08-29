const fs = require("fs")
const execSync = require("child_process").execSync

const preCommitContent = `#!/bin/sh
#
# Run prettier before every commit
npm run format`

// write pre-commit file
fs.writeFile(".git/hooks/pre-commit", preCommitContent, (err) => {
  if (err) return console.log(err)
  console.log("pre-commit successfully created")
})

// make file executable
execSync("chmod u+x .git/hooks/pre-commit", { encoding: "utf8" })
