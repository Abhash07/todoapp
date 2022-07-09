Simple TO-DO app
If you encounter ' Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style ' ERROR then use the following 3 lines of code in your terminal after installling all the dependencies

git config core.autocrlf false
git rm --cached -r .
git reset --hard
