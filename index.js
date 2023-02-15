#!/usr/bin/env node

const fse = require("fs-extra");

const nvimCopiesPath = `${process.env.HOME}/.config/nvim-copies`;


if(!fse.existsSync(nvimCopiesPath)){
  fse.mkdirSync(nvimCopiesPath)
}



