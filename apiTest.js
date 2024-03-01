$.ajax({
	url: "https://api.github.com/repos/MacroFlower/Bug-Company",
	success: function (response) {
		console.log(response);
		console.log(response.owner.login);
		console.log(response.owner.avatar_url);
		let avatarImg = response.owner.avatar_url;
		$("#avatar").attr("src", avatarImg);
		$("#avatar").css({ width: "100px" });
	},
});
