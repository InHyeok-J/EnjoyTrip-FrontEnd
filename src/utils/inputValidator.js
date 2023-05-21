// 영어대소문자숫자@영어대소문자.영어대소문자(2~3) 만 가능.
const emailExp = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
const passwordExp = /^[A-Za-z0-9]{8,16}$/;
const nicknameExp = /^[가-힣]{2,7}$/;

export const emailValidator = input => {
	if (input === null || input.length == 0) {
		return false;
	}
	if (!emailExp.test(input)) {
		return false;
	}
	return true;
};

export const passwordValidator = input => {
	if (input === null || input.length == 0) {
		return false;
	}
	if (!passwordExp.test(input)) {
		return false;
	}

	return true;
};

export const nicknameValidator = input => {
	if (input === null || input.length == 0) {
		return false;
	}

	if (!nicknameExp.test(input)) {
		return false;
	}

	return true;
};
