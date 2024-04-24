
const images = [
	"https://scontent.xx.fbcdn.net/v/t1.15752-9/434286231_1829069747601534_3291754262611246378_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hbP_AabVPzAAb4vHpLi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEHU2S3mHin0VHuFSQg8gCAO2p7I8Dhcl9ulyHKWkw8Og&oe=665044B1",
	"https://scontent.xx.fbcdn.net/v/t1.15752-9/434508368_1122135782397658_9022297504396293999_n.jpg?stp=dst-jpg_s403x403&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HyBIT-DCFwAAb453NrX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QH7fhM5bWpS_3ZXww4tLEzBn1mHuH7e6HNVRwf05E-Y3A&oe=665044DC",
	"https://scontent.xx.fbcdn.net/v/t1.15752-9/440074928_978046797190145_2249708173030855938_n.jpg?stp=dst-jpg_s403x403&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DkhGLXGBlVEAb4XH8O-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGoruUMSoXxPcL7NC4OkVT5DHFOY-C3X_JJ_ftYo6H2rQ&oe=66501CEA",
	"https://scontent.xx.fbcdn.net/v/t1.15752-9/434802982_787020566864398_3083623733351011433_n.jpg?stp=dst-jpg_s403x403&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Zw4AsQA9fM8Ab5hXEKL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QH5pvx7irfEHxKAtxDaAAJDgGEwC2n0cq2pZnudchWDWA&oe=66502C66",
	"https://scontent.xx.fbcdn.net/v/t1.15752-9/434354126_463310599359407_263941187159177112_n.jpg?stp=dst-jpg_s403x403&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z5b2jbaVgnYAb6laW0Z&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHhLSLZ5g6C0Pgdi9jvt2SOh58V0UkI_vbel499l7wtFQ&oe=66503489",
	
];

$(document).ready(function () {
	let current = 0;
	$("#mirror-content").on("click", function () {
		$(this).css({
			"background-image": `url(${images[++current % images.length]})`
		});
	});
});
