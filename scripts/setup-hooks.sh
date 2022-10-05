# Set commit-msg hook
echo '#!/bin/sh
npx --no -- commitlint --edit "$1"' >.git/hooks/commit-msg
chmod +x .git/hooks/commit-msg

# Set pre-commit hook
echo '#!/bin/sh
# Lint and format staged files
linter_exit_code=1
all_files=$(git diff --staged --name-only --diff-filter=d)
js_files=$(git diff --staged --name-only --diff-filter=d | grep .js$)
scss_files=$(git diff --staged --name-only --diff-filter=d | grep .scss$)

./node_modules/.bin/prettier --ignore-unknown --write $all_files &&
    ./node_modules/.bin/eslint $js_files --quiet --fix &&
    ./node_modules/.bin/stylelint $scss_files --stdin --quiet --fix &&
    ./node_modules/.bin/prettier --check $all_files

linter_exit_code=$?

git add -f $js_files $scss_files

if [ $linter_exit_code -ne 0 ]; then
    echo "❌ Linter errors have occurred"
    exit 1
else
    echo "✅ Prettier, Eslint and Stylelint did not find any errors"
    exit 0
fi' >.git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
