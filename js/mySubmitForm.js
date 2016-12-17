	$(document).ready(function () {
		$("#datetimepicker").datetimepicker();
		$('#datetimepicker').datetimepicker({
						datepicker:true,
						allowTimes:['06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'],
						step:5
				});
		$('#datetimepicker').datetimepicker({
		// timepicker:false,
		 formatDate:'Y/m/d',
		 minDate:'0',//yesterday is minimum date(for today use 0 or -1970/01/01)
		// maxDate:'+1970/01/02'//tomorrow is maximum date calendar
		});
		$('#input').datetimepicker();
		$('#input').datetimepicker(validate)



		var validator = $("#resForm").bootstrapValidator({

			fields: {
				datetimepicker: {
					validators: {
						notEmpty: {
						message: 'Please select a date and time'
						},
						regexp: {
						regexp: /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2}) ([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
						message: 'Please choose a valid date and time witht the format YYYY/MM/DD hh:mm NO ADDITIONAL SPACES'
						}
					}
				}
			}
		});
		validator.on("success.form.bv", function (e) {
			$("#confirmation").removeClass("hidden");
		});
		validator.on('error.form.bv', function(e, data) {
             $("#resForm button").prop('disabled', false);

        });


	});
