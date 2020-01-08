[󠁧󠁢󠁥󠁮󠁧󠁿🇬🇧]
## Shakal (Jackal)
### What is it?
This is a set of node.js scripts packaged in a docker image and used for gzip and brotli compression.

### How to use?
#### Bash
```bash
npx shakal-cli ./dist
# или
npx shakal-cli '["dist/static", "dist/chunks"]' # json array of directories
```
#### Docker
```
docker run \
    -v $(pwd)/dist:/scripts/dist \
    --env 'dirs=["dist/", "prod/"]' \
    -i mngame/shakal
```
* `-v $(pwd)/dist:/scripts/dist` – mount local directory `dist` and place it `/scripts/dist` inside container environment
* `--env 'dirs=["dist/", "prod/"]'` – set env var `dirs`. It should be inn JSON format and contain array of strings. Each one is a name of local directory. **A string should end with `/`.**
* `-i mngame/shakal` – image name

### Development
* `base-compressor.js` – a script that implements basic compression logic.

    Arguments:
    * compression function – any js function. So far they are brotli and gzip;
    * compression params – object with params required by compression function;
    * extension – File extension to compress, should start with a dot
* `gzip.js` – gzip lvl 9 compression script;
* `brotli.js` – brotli lvl 11 compression script.
* `index.js` – takes a list of directories as argument and starts both compressions.
* `bin/shakal` – console utility wrapper.

```bash 
npm start -- test
npm start -- '["test/1", "test/2"]'
```

[🇷🇺]
## Шакал
### Что такое?
Это набор node.js скриптов, запакованных в докер образ и используемых для сжатия в gzip и brotli.

### Как использовать?
```bash
npx shakal-cli ./dist
# или
npx shakal-cli '["dist/static", "dist/chunks"]' # json массив дирректорий
```

#### Вариант c docker
```
docker run \
    -v $(pwd)/dist:/scripts/dist \
    --env 'dirs=["dist/", "prod/"]' \
    -i mngame/shakal
```
* `-v $(pwd)/dist:/scripts/dist` – указание докеру взять директорию с локального окружения `dist` и считать ее директорией `/scripts/dist` в окружении докер контейнера
* `--env 'dirs=["dist/", "prod/"]'` – указание переменной окружения `dirs`, которая должна быть в формате JSON и описывать массив строк. Каждая строка – это название локальной директории, которая была указана шагом выше. **Строка должна заканчиваться слешом.**
* `-i mngame/shakal` – указанием образа, если вы собрали локально, то строчка будет отличаться

### Разработка
* `base-compressor.js` – скрипт, который реализует базовую логику по сжатию.

    Аргументы на вход:
    * функция сжатия – любая js-функция. На данный момент поддерживается brotli и gzip;
    * параметры сжатия – объект с параметрами, необходимыми для переданной функции;
    * расширение – расширение артефактов сжатия. Необходимо указывать, начиная с символа точки.
* `gzip.js` – скрипт, который производит сжатие в gzip с 9 уровнем;
* `brotli.js` – скрипт, который производит сжатие в brotli с 11 уровнем.
* `index.js` – принимает как аргумент список дирректорий и запускает оба типа сжатия.
* `bin/shakal` – обертка для консольной утилиты.

```bash 
npm start -- test
npm start -- '["test/1", "test/2"]'
```
