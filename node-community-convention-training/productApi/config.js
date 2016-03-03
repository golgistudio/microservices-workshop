module.exports = {
  dbConnectionString: `postgres://admin:EHSOLOQCPTQPOPCQ@sl-us-dal-9-portal.1.dblayer.com:10073/compose`,
  port: process.env.PORT || 3201
}
  //dbConnectionString: process.env.PG_URI || `postgres://${process.env.PG_USER || process.env.USER}:${process.env.PG_PASSWORD}@localhost:5432/${process.env.PG_DATABASE || 'training'}`,
