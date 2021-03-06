
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([{
        id: 1,
        volunteer_id: 1,
        non_profit_id: 0,
        start_date_time: '2017-04-28 19:00:00', end_date_time: '2017-04-28 20:00:00',
        status: 'available',
        special_directions: '',
        volunteer_job_assessment: '',
        skill: 0
      },
      {
        id: 2,
        volunteer_id: 1,
        non_profit_id: 0,
        start_date_time: '2017-04-28 20:00:00', end_date_time: '2017-04-28 21:00:00',
        status: 'available',
        special_directions: '',
        volunteer_job_assessment: '',
        skill: 0
      },
      {
        id: 3,
        volunteer_id: 2,
        non_profit_id: 0,
        start_date_time: '2017-04-28 19:00:00',
        end_date_time: '2017-04-28 20:00:00',
        status: 'available',
        special_directions: '',
        volunteer_job_assessment: '',
        skill: 0
      },
      {
        id: 4,
        volunteer_id: 2,
        non_profit_id: 0,
        start_date_time: '2017-05-05 15:00:00',
        end_date_time: '2017-05-05 16:00:00',
        status: 'booked',
        special_directions: '',
        volunteer_job_assessment: '',
        skill: 0
      },
      {
        id: 5,
        volunteer_id: 1,
        non_profit_id: 2,
        start_date_time: '2017-05-05 14:00:00',
        end_date_time: '2017-05-05 16:00:00',
        status: 'booked',
        special_directions: 'Baker room, check-in at front desk 10 minutes prior',
        volunteer_job_assessment: '',
        skill: 4
      },
      {
        id: 6,
        volunteer_id: 2,
        non_profit_id: 1,
        start_date_time: '2017-05-05 14:00:00',
        end_date_time: '2017-05-05 16:00:00',
        status: 'booked',
        special_directions: 'Baker room, check-in at front desk 10 minutes prior',
        volunteer_job_assessment: '',
        skill: 1
      },
      {
        id: 7,
        volunteer_id: 2,
        non_profit_id: 2,
        start_date_time: '2017-05-05 14:00:00',
        end_date_time: '2017-05-05 16:00:00',
        status: 'booked',
        special_directions: 'Baker room, check-in at front desk 10 minutes prior',
        volunteer_job_assessment: '',
        skill: 1
      },
      {
        id: 8,
        volunteer_id: 2,
        non_profit_id: 1,
        start_date_time: '2017-05-05 14:00:00',
        end_date_time: '2017-05-05 16:00:00',
        status: 'booked',
        special_directions: 'Baker room, check-in at front desk 10 minutes prior',
        volunteer_job_assessment: '',
        skill: 3
      },
      {
        id: 9,
        volunteer_id: 2,
        non_profit_id: 2,
        start_date_time: '2017-05-05 14:00:00',
        end_date_time: '2017-05-05 16:00:00',
        status: 'booked',
        special_directions: 'Baker room, check-in at front desk 10 minutes prior',
        volunteer_job_assessment: '',
        skill: 2
      },
      {
        id: 10,
        volunteer_id: 2,
        non_profit_id: 1,
        start_date_time: '2017-05-05 14:00:00',
        end_date_time: '2017-05-05 16:00:00',
        status: 'booked',
        special_directions: 'Baker room, check-in at front desk 10 minutes prior',
        volunteer_job_assessment: '',
        skill: 4
      }
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('bookings_id_seq', (SELECT MAX(id) FROM bookings));"
      );
    });
};
