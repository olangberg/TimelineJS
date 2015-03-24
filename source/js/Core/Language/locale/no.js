/* Norwegian LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "no",
		api: {
			wikipedia: "no"
		},
		date: {
			month: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
			month_abbr: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."],
			day: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
			day_abbr: ["Søn.", "Man.", "Tir.", "Ons.", "Tor.", "Fre.", "Lør."]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "d. mmm",
			full: "d. mmmm yyyy",
			time_short: "HH:MM:ss",
			time_no_seconds_short: "HH:MM",
			time_no_seconds_small_date: "HH:MM'<br/><small>'d. mmmm',' yyyy'</small>'",
			full_long: "dddd',' d. mmm',' yyyy 'kl.' HH:MM",
			full_long_small_date: "HH:MM'<br/><small>'dddd',' d. mmm',' yyyy'</small>'"
		},
		messages: {
			loading_timeline: "Laster tidslinje... ",
			return_to_title: "Tilbake til tittel",
			expand_timeline: "Utvid tidslinje",
			contract_timeline: "Krymp tidslinje",
			wikipedia: "Fra Wikipedia, den frie encyklopedi",
			loading_content: "Laster innhold",
			loading: "Laster",
			swipe_nav: "Swipe to Navigate"		}
	}
}
