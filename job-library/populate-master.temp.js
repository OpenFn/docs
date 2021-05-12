#!/usr/bin/env node

// TODO: replace this with an ast.json lookup from npm or github.

const fs = require('fs');
const homedir = require('os').homedir();

const adaptors = [
  'beyonic',
  'cartodb',
  'commcare',
  'dhis2',
  'dynamics',
  'googlesheets',
  'facebook',
  'godata',
  'http',
  'khanacademy',
  'kobotoolbox',
  'magpi',
  'mailchimp',
  'mailgun',
  'maximo',
  'medicmobile',
  'mogli',
  'mongodb',
  'mssql',
  'mysql',
  'nexmo',
  'openfn',
  'openhim',
  'openmrs',
  'postgresql',
  'primero',
  'progres',
  'resourcemap',
  'salesforce',
  'sftp',
  'smpp',
  'surveycto',
  'telerivet',
  'vtiger',
  'zoho',
];

const functions = adaptors
  .map(a => {
    try {
      const ast = JSON.parse(
        fs.readFileSync(
          `${homedir}/platform-app/priv/language_packs/language-${a}/ast.json`
        )
      );
      return [
        ...ast.operations.map(o => o.name),
        ...ast.common.map(o => o.name),
        ...ast.exports.map(o => o.name),
      ];
    } catch (error) {}
  })
  .flat()
  .sort();

const unique = [...new Set(functions)];

fs.writeFileSync(
  './job-library/master.temp.json',
  JSON.stringify(unique, null, 2)
);
