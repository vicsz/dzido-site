# Dzido's Website

![Deploy to 1and1](https://github.com//vicsz/dzido-site/actions/workflows/deploy.yml/badge.svg)


This repository contains the source code for Dzido's personal website, a simple static site built with HTML, CSS, and JavaScript. 

## Automatic Deployment

The website is automatically deployed to the `dzido.com` domain upon each commit to the master branch. This is achieved using a GitHub Actions script that uploads the contents of the `site` directory to the root directory of the Ionos host via SFTP. This ensures that the live website stays up to date with the latest changes in the repository.

For more information, refer to the `.github/workflows/deploy.yml` file.

## Development

To contribute to this project, follow these steps:

1. Clone the repository.
2. Make changes to the files in the `site` directory.
3. Commit and push your changes to the master branch.

Please ensure that your changes are compatible with the existing code and do not introduce any security vulnerabilities or performance issues.
