export const movement = (
	x: number,
	setX: React.Dispatch<React.SetStateAction<number>>,
	y: number,
	setY: React.Dispatch<React.SetStateAction<number>>,
	e: KeyboardEvent
) => {
	const speed = 0.1;
	// const MoveForce = speed * delta * x;
	console.log(e.code);

	// fuck this stupid app
	switch (e.code) {
		case 'KeyW':
			setX(x + speed);
			break;
		case 'KeyS':
			setX(x - speed);
			break;
		case 'KeyA':
			setY(y + speed);
			break;
		case 'KeyD':
			setY(y - speed);
			break;
	}
};
