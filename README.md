# twist-dl-mass-download
Simple twist.moe mass anime downloader

## Usage

### Interactive CLI
```bash
$ twist-dl
```
Just type `twist-dl` to your terminal/cmd.

This will launch a simple interface that can be easily controlled via arrow keys, space and enter.

Anime list and sources are directly fetched from twist.moe. It will download into your currently working directory under the same filename as it is on their servers.

### With arguments

You can also download anime via CLI if that's what you prefer. Down below you can see the help message.
```bash
$ twist-dl -h
```
```
Usage: twist-dl -a <anime name> [-o <output>]

Options:

  -a, --anime       Name of the anime, can be partial
  -o, --output      Folder in which it'll be downloaded in, use - to output to stdout
  -h, --help        Displays this message
  -s, --silent      Suppress any (except of donation message) output
  -E, --english     Search anime names using English titles
```
#### Examples
```bash
$ twist-dl -a "yuyushiki" -o directory           # Download the entire of Yuyushiki
$ twist-dl --anime "yuyushiki" --output "directory"           # Download the entire of Yuyushiki
```

## Disclaimer

twist-dl-mass-download nor kneesox are **not** affiliated with twist.moe.

This program is made for personal-use only. If you like the program, please ***donate to the Twist.Moe admins*** so they can keep the servers up and running.

## License

MIT
