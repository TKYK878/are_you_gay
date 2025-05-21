let currentRotation = 0;
let spinning = false; // 轉動狀態旗標

function startSpin() {
	if (spinning) return; // 如果正在轉，直接跳出不執行
	spinning = true;

	gtag('event', 'spin_button_clicked', {
	event_category: '轉盤',
	event_label: '按下按鈕'
	});


	const wheel = document.getElementById('wheel');
	const button = document.getElementById('spinButton');

	button.disabled = true; // 禁用按鈕

	const fakeTarget = Math.random() < 0.5 ? 0 : 180;
	const extraSpins = Math.floor(Math.random() * 3 + 3);
	currentRotation += 360 * extraSpins + fakeTarget;

	wheel.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)';
	wheel.style.transform = `rotate(${currentRotation}deg)`;

	setTimeout(() => {
		const realAngle = currentRotation % 360;

		if (realAngle === 0) {
			currentRotation += 180;
			wheel.style.transition = 'transform 1s ease-in';
			wheel.style.transform = `rotate(${currentRotation}deg)`;

			setTimeout(() => {
				alert("🎉🎉恭喜你，你是男同🎉🎉");
				button.disabled = false;  // 轉完開啟按鈕
				spinning = false;        // 重置狀態
			}, 1000);
		} else {
			alert("🎉🎉恭喜你，你是男同🎉🎉");
			button.disabled = false;  // 轉完開啟按鈕
			spinning = false;        // 重置狀態
		}
	}, 4000);
}
