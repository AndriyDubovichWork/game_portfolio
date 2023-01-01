export const movement = (
	x: number,
	setX: React.Dispatch<React.SetStateAction<number>>,
	e: KeyboardEvent
) => {
	const speed = 0.1;
	// const MoveForce = speed * delta * x;

	switch (e.code) {
		case 'KeyW':
			setX(x + speed);
			break;
		case 'KeyS':
			setX(x - speed);
			break;
	}
};
