const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertdisbursement = (request, response) => {
const { id, amountinpennies, disbursement_status_id,feeInpennies,disbursement_feepaidby_id,rollupid,disbursement_money_status_id,principalinpennies,disbursementdetails_interestinpennies,borrowerfeesinpennies,sellerfeesinpennies,memo,previousprincipalbalanceinpennies,deal_participant_id,created} = request.body
  pool.query( "INSERT INTO cbanc2.disbursement (id,amountinpennies,disbursement_status_id,feeInpennies,disbursement_feepaidby_id,rollupid,disbursement_money_status_id,principalinpennies,disbursementdetails_interestinpennies,borrowerfeesinpennies,sellerfeesinpennies,memo,previousprincipalbalanceinpennies,deal_participant_id,created) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)",[id,amountinpennies,disbursement_status_id,feeInpennies,disbursement_feepaidby_id,rollupid,disbursement_money_status_id,principalinpennies,disbursementdetails_interestinpennies,borrowerfeesinpennies,sellerfeesinpennies,memo,previousprincipalbalanceinpennies,deal_participant_id,created), (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in disbursement')
  })
}

module.exports = {
insertdisbursement
}
