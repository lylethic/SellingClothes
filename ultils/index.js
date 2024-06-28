// function formatCash(str) {
// 	return str
// 		.split('')
// 		.reverse()
// 		.reduce((prev, next, index) => {
// 			return (index % 3 ? next : next + ',') + prev;
// 		});
// }

function formatCash(num) {
	if (typeof num !== 'number') {
		num = parseFloat(num);
	}
	return num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const calculateDiscount = (originalPrice, salePrice) => {
	const percentageDiscount =
		((originalPrice - salePrice) / originalPrice) * 100;
	return percentageDiscount;
};

const validateLogin = (values) => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Vui lòng nhập trường này!';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Trường này phải là email!';
	}
	if (!values.password) {
		errors.password = 'Vui lòng nhập trường này!';
	} else if (values.password.length < 6) {
		errors.password = 'Mật khẩu phải nhiều hơn hoặc bằng 6 ký tự!';
	}
	return errors;
};

const validateSignUp = (values) => {
	const errors = {};

	if (!values.fullName) {
		errors.fullName = 'Vui lòng nhập trường này!';
	}

	if (!values.email) {
		errors.email = 'Vui lòng nhập trường này!';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Trường này phải là email!';
	}

	if (!values.password) {
		errors.password = 'Vui lòng nhập trường này!';
	} else if (values.password.length < 6) {
		errors.password = 'Mật khẩu phải nhiều hơn hoặc bằng 6 ký tự!';
	}

	if (!values.confirmPassword) {
		errors.confirmPassword = 'Vui lòng nhập trường này!';
	} else if (values.confirmPassword !== values.password) {
		errors.confirmPassword = 'Mật khẩu nhập lại không khớp!';
	}
	return errors;
};

export { formatCash, calculateDiscount, validateSignUp, validateLogin };
