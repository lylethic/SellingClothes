const categories = [
	{
		id: '1',
		name: 'Áo thun',
		color: '#f5f5f5',
		icon: require('../assets/uzl7_1mew_210929.jpg'),
	},
	{
		id: '2',
		name: 'Áo khoác Hoodie',
		color: '#f5f5f5',
		icon: require('../assets/iconhoodies.jpg'),
	},
	{
		id: '3',
		name: 'Quần ngắn',
		color: '#f5f5f5',
		icon: require('../assets/iconshort.jpg'),
	},
	{
		id: '4',
		name: 'Áo khoác Hoodie Zipper',
		color: '#f5f5f5',
		icon: require('../assets/iconzipper.jpg'),
	},
	{
		id: '5',
		name: 'Túi xách',
		color: '#f5f5f5',
		icon: require('../assets/iconbag.jpg'),
	},
	{
		id: '6',
		name: 'Áo thun Polo',
		color: '#f5f5f5',
		icon: require('../assets/iconpolo.jpg'),
	},
	{
		id: '7',
		name: 'Quần dài',
		color: '#f5f5f5',
		icon: require('../assets/iconTrouser.jpg'),
	},
	{
		id: '8',
		name: 'Phụ kiện',
		color: '#f5f5f5',
		icon: require('../assets/iconaccessory.jpg'),
	},
];

const brands = [
	{
		id: 'out01',
		name: 'Outerity',
	},
	{
		id: 'teel109',
		name: 'Teelab',
	},
	{
		id: 'lev99',
		name: 'Levents',
	},
	{
		id: 'miu77',
		name: 'Miucho',
	},
	{
		id: 'noctl56',
		name: 'Nocturnal',
	},
];

const clothes = [
	{
		id: '1',

		name: 'Áo Polo Teelab Local Brand Chất liệu Cotton Form Oversize 3 màu Đen, Kem, Xám Racing Master Shirt AP049',
		colorName: ['kem', 'đen', 'xám'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ls2qxyor7emc02',
		categoryId: '6',
		brandId: 'teel109',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: false,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '380000',
		sale: '199000',
		unit: 'VNĐ',
		sold: 90,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'Form: Oversize',
				productStructure: 'Chất liệu: Cotton',
				color: 'Màu sắc: Đen phối trắng',
				front: 'Thiết kế: In cao thành.',
			},
		],
	},
	{
		id: '2',
		name: 'Áo Polo Teelab Local Brand Unisex Football Vintage Polo Shirt AP053',
		colorName: ['hồng', 'đen'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luipsx5ujhnpfa',
		categoryId: '6',
		brandId: 'teel109',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: false,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '350000',
		sale: '195000',
		unit: 'VNĐ',
		sold: 99,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'Form: Oversize',
				productStructure: 'Chất liệu: Vải thể thao',
				color: 'Màu sắc: Đen/Hồng',
				front: 'Thiết kế: In lụa.',
			},
		],
	},
	{
		id: '3',
		name: 'HAPPY HEART POLO (desing by ruych)',
		colorName: ['be', 'trắng', 'đen'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll6ob0bx0n9k44',
		categoryId: '6',
		brandId: 'noctl56',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: false,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '549000',
		sale: '299000',
		unit: 'VNĐ',
		sold: 1020,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'Size : m l xl',
				productStructure: 'chất : cotton',
				color: 'Màu : bee / trắng / đen',
				front:
					'Trái tim đang hạnh phúc , đang yêu đời , pha 1 chút tinh nghịch để tạo nên chiếc áo phông unisex nam nữ đều có thể phối được!',
			},
		],
	},
	{
		id: '4',
		name: 'Kính râm vuông lớn dành cho nữ phong cách Mỹ Châu Âu',
		color: 'black',
		colorName: ['đen'],
		image:
			'https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lof3rzymvja2e7',
		categoryId: '8',
		brandId: 'noctl56',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: false,
		star: 4.0,
		size: ['S'],
		reviews: 600,
		price: '1980000',
		sale: '866000',
		unit: 'VNĐ',
		sold: 878,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'One Size',
				productStructure: 'Chất liệu: nhựa',
				color: 'Black',
				front: 'Kính vành đầy đủ. Phong cách thời trang.',
			},
		],
	},
	{
		id: '5',
		name: 'Áo Thun Levents Got This/ White',
		color: '#FFFACD',
		colorName: ['kem', 'đen', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/afb5c5bcad287559278ee327eeae9adf',
		categoryId: '1',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: false,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '590000',
		sale: '480000',
		unit: 'VNĐ',
		sold: 0,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '0/1/2/3/4',
				productStructure:
					'Lì Ven Compact - chất vải siêu cao cấp của Nhà Lì. Lì Ven Compact - cotton cao cấp kết hợp cùng vải sợi bông tân tiến, tạo độ mềm mịn, giảm tối thiểu tình trạng xù lông, độ bền cao, dày dặn nhưng khả năng thấm hút vô cùng tốt.',
				color:
					'CREAM: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Dòng chữ kèm tên thương hiệu Levents đặc trưng với phối màu đen ở dưới họa tiết. Graphic FLOWERS WINDOW mới lạ với đa dạng màu sắc tone màu nhẹ nhàng như xanh dương, xanh lá, trắng, cam ,vàng được phối màu hài hòa tạo nên một họa tiết vô cùng bắt mắt cho áo. Graphic được sử dụng kỹ thuật vẽ tay tạo sự mới mẻ, linh hoạt kết hợp cùng kỹ thuật in lụa cao cấp đảm bảo độ sắc nét và độ bền cao cho sản phẩm.',
			},
		],
	},
	{
		id: '6',
		name: 'Áo Polo Levents Stripe/ White',
		color: '#FFFACD',
		colorName: ['kem', 'đen', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/21ad0d48135fc388c627ec23a5345684',
		categoryId: '6',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: false,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '590000',
		sale: '',
		unit: 'VNĐ',
		sold: 423,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '0/1/2/3/4',
				productStructure:
					'Lì Ven Compact - chất vải siêu cao cấp của Nhà Lì. Lì Ven Compact - cotton cao cấp kết hợp cùng vải sợi bông tân tiến, tạo độ mềm mịn, giảm tối thiểu tình trạng xù lông, độ bền cao, dày dặn nhưng khả năng thấm hút vô cùng tốt.',
				color:
					'CREAM: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Dòng chữ kèm tên thương hiệu Levents đặc trưng với phối màu đen ở dưới họa tiết. Graphic FLOWERS WINDOW mới lạ với đa dạng màu sắc tone màu nhẹ nhàng như xanh dương, xanh lá, trắng, cam ,vàng được phối màu hài hòa tạo nên một họa tiết vô cùng bắt mắt cho áo. Graphic được sử dụng kỹ thuật vẽ tay tạo sự mới mẻ, linh hoạt kết hợp cùng kỹ thuật in lụa cao cấp đảm bảo độ sắc nét và độ bền cao cho sản phẩm.',
			},
		],
	},
	{
		id: '7',
		name: 'Áo Polo Levents Stripe/ Black',
		colorName: ['đen'],
		image:
			'https://down-vn.img.susercontent.com/file/8faf62247d4d3b33050725716526f874',
		categoryId: '6',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: false,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '590000',
		sale: '',
		unit: 'VNĐ',
		sold: 1020,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '0/1/2/3/4',
				productStructure:
					'Lì Ven Compact - chất vải siêu cao cấp của Nhà Lì. Lì Ven Compact - cotton cao cấp kết hợp cùng vải sợi bông tân tiến, tạo độ mềm mịn, giảm tối thiểu tình trạng xù lông, độ bền cao, dày dặn nhưng khả năng thấm hút vô cùng tốt.',
				color:
					'CREAM: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Dòng chữ kèm tên thương hiệu Levents đặc trưng với phối màu đen ở dưới họa tiết. Graphic FLOWERS WINDOW mới lạ với đa dạng màu sắc tone màu nhẹ nhàng như xanh dương, xanh lá, trắng, cam ,vàng được phối màu hài hòa tạo nên một họa tiết vô cùng bắt mắt cho áo. Graphic được sử dụng kỹ thuật vẽ tay tạo sự mới mẻ, linh hoạt kết hợp cùng kỹ thuật in lụa cao cấp đảm bảo độ sắc nét và độ bền cao cho sản phẩm.',
			},
		],
	},
	{
		id: '8',
		name: 'Quần Jeans Levents Classic Baggy Girl/ Blue',
		color: 'blue',
		colorName: ['xanh', 'đen', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lr723ip4gae1ba',
		categoryId: '7',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: false,
		isNew: false,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '590000',
		sale: '',
		unit: 'VNĐ',
		sold: 111,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '2/3/4',
				productStructure: 'Denim',
				color:
					'CREAM: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Form baggy women không quá ôm, không quá rộng, tôn dáng nữ mang đến sự thuận tiện và thoải mái cho hoạt động của người mặc một cách tốt nhất. Dễ phối với mọi outfits, cho những buổi cafe với bạn bè hằng ngày. - BLUE: trung tính phù hợp với mọi phong cách, outfit. Quần đứng form tạo cảm giác cao ráo, thọn gọn.',
			},
		],
	},
	{
		id: '9',
		name: 'Quần dài Levents Cargo SweatPants/ Dark Green',
		color: '#254117',
		colorName: ['xanh đen', 'đen'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltqhsw44b4zx24',
		categoryId: '7',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '460000',
		sale: '450000',
		unit: 'VNĐ',
		sold: 656,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '2/3/4',
				productStructure:
					'Nỉ - dày dặn, mềm mịn nhưng vẫn vô cùng thoáng mát khi sử dụng',
				color:
					'CREAM: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Có túi cargo ở bên trái quần cùng logo Levents phối màu kem đặc trưng tạo điểm nhấn cá tính. Nhưng cũng vô cùng thuận tiện cho việc để đồ cá nhân như chìa khóa xe',
			},
		],
	},
	{
		id: '10',
		name: 'Nón Levents Classic 2tone/ Black',
		color: 'black',
		colorName: ['đen', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lma2rp5o3d9b12',
		categoryId: '8',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: false,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '320000',
		sale: '271000',
		unit: 'VNĐ',
		sold: 878,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'One Size',
				productStructure: 'Poly',
				color: 'Black',
				front:
					'Dòng chữ kèm tên thương hiệu Levents đặc trưng với phối màu đen ở dưới họa tiết. Graphic FLOWERS WINDOW mới lạ với đa dạng màu sắc tone màu nhẹ nhàng như xanh dương, xanh lá, trắng, cam ,vàng được phối màu hài hòa tạo nên một họa tiết vô cùng bắt mắt cho áo. Graphic được sử dụng kỹ thuật vẽ tay tạo sự mới mẻ, linh hoạt kết hợp cùng kỹ thuật in lụa cao cấp đảm bảo độ sắc nét và độ bền cao cho sản phẩm.',
			},
		],
	},
	{
		id: '11',
		name: 'Áo Hoodie Levents Popular Logo 2.0/ Cream',
		color: '#FFFACD',
		colorName: ['kem', 'đen', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/22fbed31aad2660a2cd725f27d32f6cd',
		categoryId: '2',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '590000',
		sale: '499000',
		unit: 'VNĐ',
		sold: 989,
		stock: 900,
		quantity: '',

		desc: [
			{
				size: '2/3/4',
				productStructure:
					'LÌ VEN FABRIC - chất vải dày dặn, mềm mịm, không bị nhăn.',
				color:
					'CREAM: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Form áo được Fit size theo form và tiêu chuẩn tương đối của người Việt Nam, nếu bạn đang cân nhắc giữa hai size, nên chọn size lớn hơn. Size 2: Chiều cao từ 1m65 - 1m72, cân nặng dưới 65kg. Size 3: Chiều cao từ 1m70 - 1m77, cân nặng dưới 80kg. Size 4: Chiều cao trên 1m72, cân nặng dưới 95kg.',
			},
		],
	},
	{
		id: '12',
		name: 'Áo Hoodie Zipper Levents Classic/ Blue',
		colorName: ['xanh da trời', 'đen', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq1o2bx12vgy44',
		categoryId: '4',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '620000',
		sale: '599000',
		unit: 'VNĐ',
		sold: 666,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '2/3/4',
				productStructure: 'Nỉ chân cua cao cấp.',
				color: 'Grey, Cream: màu sắc trung tính, dễ dàng phối đồ, sáng da.',
				front:
					'Áo hoodie oversize có độ dài phủ quá mông,phần tay áo rộng rãi, phần tay áo rộng rãi, form dáng thoải mái, thoáng mát khi mặc.',
			},
		],
	},
	{
		id: '13',
		name: 'Túi Tote Levents/ Black',
		color: 'black',
		colorName: ['đen', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/956e3a90df3930f8478072c59465e818',
		categoryId: '5',
		brandId: 'lev99',
		isFav: false,
		isBrand: true,
		isSale: false,
		isNew: false,
		star: 4.0,
		size: ['M'],
		reviews: 600,
		price: '100000',
		sale: '',
		unit: 'VNĐ',
		sold: 23000,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'One size 27 x 48 cm',
				productStructure: 'Canvas',
				color: 'BLACK',
				front: 'LEVENTS® TOTE BAG/ BLACK',
			},
		],
	},
	{
		id: '14',
		name: 'Áo Thun Outerity AABBCC / Cannoli Cream',
		color: '#fff',
		colorName: ['kem', 'đen', 'trắng'],
		image:
			'https://product.hstatic.net/200000312481/product/z5356509313006_abb3cd1c7d47d24d3d6b37b94dccefb7_cd6e05246116424a82672bce1b1ee367_master.jpg',
		categoryId: '1',
		brandId: 'out01',
		isFav: true,
		isBrand: true,
		isSale: false,
		isNew: false,
		star: 4.0,
		size: ['S', 'M', 'L'],
		reviews: 600,
		price: '230000',
		sale: '197000',
		unit: 'VNĐ',
		sold: 98,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'S: Dài 69 Rộng 52.5 | 1m50 - 1m65, 45 - 55Kg, M: Dài 73 Rộng 55 | 1m60 - 1m75, 50 - 65Kg, L: Dài 76.5 Rộng 57.5 | 1m7 - 1m8, 65Kg - 80Kg',
				productStructure: 'Cotton',
				color: 'CREAM',
				front:
					'Nếu chưa biết lựa size bạn có thể inbox để được chúng mình tư vấn.',
			},
		],
	},
	{
		id: '15',
		name: 'Outerity Jean Bottom Up Form Unisex / Xám Tiêu',
		color: '#fff',
		colorName: ['xám tiêu', 'đen'],
		image:
			'https://product.hstatic.net/200000312481/product/xam_b8f0587972594a3e8a6a90e4024c3f6b_master.jpg',
		categoryId: '7',
		brandId: 'out01',
		isFav: false,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['S', 'M', 'L'],
		reviews: 600,
		price: '300000',
		sale: '197000',
		unit: 'VNĐ',
		sold: 98,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'Size: S M L, Form: Cạp cao.',
				productStructure:
					'Chất liệu: Jean, chất vải mềm không thô ráp, vải có co dãn nhẹ.',
				color: 'GRAY',
				front:
					'Nếu chưa biết lựa size bạn có thể inbox để được chúng mình tư vấn.',
			},
		],
	},
	{
		id: '16',
		name: 'Outerity Jean Wash Cạp Cao Form Unisex / Xanh Biển',
		color: '#fff',
		colorName: ['xanh biển', 'trắng'],
		image:
			'https://product.hstatic.net/200000312481/product/xanh_8555dc5faab74ce2b4d201ddbf041c6f_master.jpg',
		categoryId: '7',
		brandId: 'out01',
		isFav: false,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['S', 'M', 'L'],
		reviews: 600,
		price: '300000',
		sale: '197000',
		unit: 'VNĐ',
		sold: 98,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'Size: S M L, Form: Cạp cao.',
				productStructure:
					'Chất liệu: Jean, chất vải mềm không thô ráp, vải có co dãn nhẹ.',
				color: 'BLUE',
				front:
					'Nếu chưa biết lựa size bạn có thể inbox để được chúng mình tư vấn.',
			},
		],
	},
	{
		id: '17',
		name: 'Áo phông local brand unisex ATD1184 Miucho tay ngắn vải cotton thoáng mát cổ tròn in mix',
		color: '#fff',
		colorName: ['trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsxwoyezyyzd46',
		categoryId: '1',
		brandId: 'miu77',
		isFav: false,
		isBrand: true,
		isSale: true,
		isNew: false,
		star: 4.0,
		size: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
		reviews: 600,
		price: '220000',
		sale: '110000',
		unit: 'VNĐ',
		sold: 98,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'Size: S M L 2XL 3XL.',
				productStructure:
					'Chất liệu: Jean, chất vải mềm không thô ráp, vải có co dãn nhẹ.',
				color:
					'Màu sắc: Áo thun Miucho có sẵn hai gam màu cơ bản là trắng và đen, ngoài ra còn đa dạng màu sắc tùy vào mẫu áo. Giúp bạn dễ dàng kết hợp với nhiều trang phục khác nhau.',
				front:
					'Miucho tự hào là một thương hiệu thời trang Unisex đa dạng mẫu áo thun form rộng hot trend, luôn cập nhật và tạo ra những bộ sưu tập mới và độc đáo.',
			},
		],
	},
	{
		id: '18',
		name: 'Quần ống rộng vải linen form xuông may dập ly, quần ống suông nữ linen phối 3 màu MQ042',
		color: '#fff',
		colorName: ['kem', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt1cxz8vtf44bd',
		brandId: 'miu77',
		categoryId: '7',
		isFav: false,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L'],
		reviews: 600,
		price: '249000',
		sale: '199000',
		unit: 'VNĐ',
		sold: 98,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'Size: M L, Form: Cạp cao.',
				productStructure:
					'Quần ống rộng vừa vặn màu trắng phong cách mới mùa hè  Là loại vải có đặc điểm mềm mịn, độ co giãn cao, khả năng thấm hút tốt và được dệt hoàn toàn từ sợi cây bông tự nhiên. Quần ống suông form rộng cổ tròn thoải mái.',
				color: 'BLUE',
				front:
					'Chất vải cotton cực kỳ thân thiện với làn da. <br/> Quần ống xuông thun nữ dễ phối đồ. Bạn có thể phối với quần jean, chân váy, … kết hợp với một đôi sneaker cho bạn tự tin xuống phố',
			},
		],
	},
	{
		id: '19',
		name: 'Quần short nữ thể thao vải thô trơn cạp chun ống rộng thời trang mùa hè Mq026N',
		color: '#fff',
		colorName: ['kem', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq1fj6cti6z67f',
		categoryId: '3',
		brandId: 'miu77',
		isFav: false,
		isBrand: true,
		isSale: false,
		isNew: false,
		star: 4.0,
		size: ['M', 'L'],
		reviews: 600,
		price: '155000',
		sale: '',
		unit: 'VNĐ',
		sold: 98,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'Size: S M L XL.',
				productStructure:
					'Quần ống rộng vừa vặn phong cách mới mùa hè Là loại vải có đặc điểm mềm mịn, độ co giãn cao, khả năng thấm hút tốt và được dệt hoàn toàn từ sợi cây bông tự nhiên. Quần ống suông form rộng cổ tròn thoải mái.',
				color: 'BLUE',
				front:
					'Chất vải cotton cực kỳ thân thiện với làn da. <br/> Quần ống xuông thun nữ dễ phối đồ. Bạn có thể phối với quần jean, chân váy, … kết hợp với một đôi sneaker cho bạn tự tin xuống phố',
			},
		],
	},
	{
		id: '20',
		name: 'Set dạ tweed tiểu thư công chúa sang chảnh đi chơi mùa đông gồm áo dạ tweed và chân váy dạ tweed Kimee MS001',
		color: '#fff',
		colorName: ['kem', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/sg-11134201-7qveg-ljv20vdh1hee51',
		categoryId: '1',
		brandId: 'miu77',
		isFav: false,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L'],
		reviews: 600,
		price: '459000',
		sale: '425000',
		unit: 'VNĐ',
		sold: 98,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'Size: M L',
				productStructure: 'Chất liệu: Sợi vải Tweed.',
				color: 'BLUE',
				front: 'Áo khoác và váy được bán riêng, không phải bộ',
			},
		],
	},
	{
		id: '21',
		name: 'Áo Hoodie Zip Minimal NOCTURNAL Vải 2 Da Chống Nắng Tốt Hindless Fabric Unisex Local Brand',
		colorName: ['XÁM'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt6k7eky5vicd9',
		categoryId: '4',
		brandId: 'noctl56',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['S', 'M', 'L'],
		reviews: 600,
		price: '420000',
		sale: '299000',
		unit: 'VNĐ',
		sold: 666,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '2/3/4',
				productStructure:
					'Chất liệu mới Nocturnal Hindless Fabric với bề mặt trong và ngoài giống nhau nên vô cùng thoáng mát và mềm mại trên da, độ thoải mái 10/10. Chống nhăn và giữ form cực tốt ngay cả khi vận động mạnh & mặc trong thời gian dài.',
				color: 'Xám.',
				front:
					'Hoodie Zip mới với đường nét được hoàn thiện kỹ lưỡng, Form Unisex Oversized đẹp xuất sắc khi mặc lên người.',
			},
		],
	},
	{
		id: '22',
		name: 'Áo Hoodie Metal NOCTURNAL Nỉ Bông Unisex Local Brand',
		colorName: ['XÁM', 'ĐỎ'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpbv8nfg193v9b',
		categoryId: '4',
		brandId: 'noctl56',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '420000',
		sale: '231800',
		unit: 'VNĐ',
		sold: 666,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '2/3/4',
				productStructure: 'Nỉ bông dày dặn, ấm áp như được crush ôm.',
				color: 'Grey, Red: màu sắc trung tính, dễ dàng phối đồ, sáng da.',
				front:
					'Form Hoodie Raglan unisex được làm mới với các đường track line cá tính, đậm chất streetwear phù hợp cả nam & nữ.',
			},
		],
	},
	{
		id: '23',
		name: 'Áo Hoodie Form Rộng NOCTURNAL Signature V1.0 Basic Nỉ Bông Unisex Local Brand',
		colorName: ['ĐEN'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llixp0itqoja06',
		categoryId: '4',
		brandId: 'noctl56',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '420000',
		sale: '231800',
		unit: 'VNĐ',
		sold: 666,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'M, L, XL',
				productStructure: 'Nỉ bông dày dặn, ấm áp như được crush ôm.',
				color: 'Đen: màu sắc trung tính, dễ dàng phối đồ, sáng da.',
				front:
					'Form Hoodie Raglan unisex được làm mới với các đường track line cá tính, đậm chất streetwear phù hợp cả nam & nữ.',
			},
		],
	},
	{
		id: '24',
		name: 'Quần Short Dù NOCTURNAL Parachute Shorts Unisex Nam Nữ Local Brand',
		color: '#fff',
		colorName: ['TRẮNG', 'ĐEN'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvcyzuufyqh9a2',
		categoryId: '3',
		brandId: 'noctl56',
		isFav: false,
		isBrand: true,
		isSale: false,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '220000',
		sale: '180000',
		unit: 'VNĐ',
		sold: 98,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'Size: M L XL.',
				productStructure:
					'Chất liệu: Layered Parachute Fabric được lót lớp lưới cotton thoáng mát.',
				color: 'Trắng/Đen',
				front:
					'Form quần tôn dáng, cân mọi style. Thoáng khí cực mát, thoải mái vận động cả ngày.',
			},
		],
	},
	{
		id: '25',
		name: 'Túi Tote Phao Đeo Vai NOCTURNAL Puffer Tote Bag Unisex Local Brand',
		color: 'black',
		colorName: ['đen'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltscohwla5u2bc',
		categoryId: '5',
		brandId: 'noctl56',
		isFav: false,
		isBrand: true,
		isSale: true,
		isNew: false,
		star: 4.0,
		size: ['S'],
		reviews: 600,
		price: '300000',
		sale: '159000',
		unit: 'VNĐ',
		sold: 23000,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'Kích thước túi Cao x Dài: 35x45',
				productStructure:
					'Chất liệu vải phao poly trần bông dày dặn, giữ form tốt.',
				color: 'BLACK',
				front:
					'Thiết kế form siêu to khổng lồ, bên trong có thêm ngăn kéo nhỏ tiện dụng. Quai đeo trần bông cùng chất liệu.',
			},
		],
	},
	{
		id: '26',
		name: 'Quần Dù Ống Rộng NOCTURNAL Balloon Pants Unisex Nam Nữ Local Brand',
		color: '#254117',
		colorName: ['xanh đen', 'đen'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt97dwhel5fodf',
		categoryId: '7',
		brandId: 'noctl56',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '240000',
		sale: '189000',
		unit: 'VNĐ',
		sold: 656,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: ' Size:  M | L | XL',
				productStructure:
					'Chất liệu : Light Parachute Fabric - mềm, nhẹ, thoáng siêu thoải mái thích hợp 4 mùa',
				color:
					'Đen: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Form quần Harem trendy, tôn dáng, nổi bật. Phần lưng được bo chun co giãn dễ mặc và tùy chỉnh, mang lại cảm giác thoải mái. ',
			},
		],
	},
	{
		id: '27',
		name: 'Áo Sơ Mi Tay Ngắn Nam Nữ Kẻ Sọc Teelab Local Brand Chất Liệu Oxford Form Oversize màu Xanh Graffiti SS049',
		color: '#FFFACD',
		colorName: ['kem', 'đen', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loqk3nb177rfb0',
		categoryId: '1',
		brandId: 'teel109',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '590000',
		sale: '580000',
		unit: 'VNĐ',
		sold: 333,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '0/1/2/3/4',
				productStructure:
					'Lì Ven Compact - chất vải siêu cao cấp của Nhà Lì. Lì Ven Compact - cotton cao cấp kết hợp cùng vải sợi bông tân tiến, tạo độ mềm mịn, giảm tối thiểu tình trạng xù lông, độ bền cao, dày dặn nhưng khả năng thấm hút vô cùng tốt.',
				color:
					'CREAM: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Dòng chữ kèm tên thương hiệu Levents đặc trưng với phối màu đen ở dưới họa tiết. Graphic FLOWERS WINDOW mới lạ với đa dạng màu sắc tone màu nhẹ nhàng như xanh dương, xanh lá, trắng, cam ,vàng được phối màu hài hòa tạo nên một họa tiết vô cùng bắt mắt cho áo. Graphic được sử dụng kỹ thuật vẽ tay tạo sự mới mẻ, linh hoạt kết hợp cùng kỹ thuật in lụa cao cấp đảm bảo độ sắc nét và độ bền cao cho sản phẩm.',
			},
		],
	},
	{
		id: '28',
		name: 'Áo Thun Levents Summer Vibe/ Blue',
		colorName: ['xanh da trời', 'đen', 'trắng'],
		color: 'blue',
		image:
			'https://down-vn.img.susercontent.com/file/435e752e20eb276cee2d84665939ba6a',
		categoryId: '1',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '590000',
		sale: '400000',
		unit: 'VNĐ',
		sold: 1,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '0/1/2/3/4',
				productStructure:
					'Lì Ven Compact - chất vải siêu cao cấp của Nhà Lì. Lì Ven Compact - cotton cao cấp kết hợp cùng vải sợi bông tân tiến, tạo độ mềm mịn, giảm tối thiểu tình trạng xù lông, độ bền cao, dày dặn nhưng khả năng thấm hút vô cùng tốt.',
				color:
					'CREAM: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Dòng chữ kèm tên thương hiệu Levents đặc trưng với phối màu đen ở dưới họa tiết. Graphic FLOWERS WINDOW mới lạ với đa dạng màu sắc tone màu nhẹ nhàng như xanh dương, xanh lá, trắng, cam ,vàng được phối màu hài hòa tạo nên một họa tiết vô cùng bắt mắt cho áo. Graphic được sử dụng kỹ thuật vẽ tay tạo sự mới mẻ, linh hoạt kết hợp cùng kỹ thuật in lụa cao cấp đảm bảo độ sắc nét và độ bền cao cho sản phẩm.',
			},
		],
	},
	{
		id: '29',
		name: 'Áo Thun Levents 2Lip/ Cream',
		color: '#FFFACD',
		colorName: ['kem', 'đen', 'trắng'],
		image:
			'https://down-vn.img.susercontent.com/file/bdc8d746a9aeeaa86573f4b3f5f4a169',
		categoryId: '1',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: false,
		isNew: false,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '890000',
		sale: '',
		unit: 'VNĐ',
		sold: 221,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '0/1/2/3/4',
				productStructure:
					'Lì Ven Compact - chất vải siêu cao cấp của Nhà Lì. Lì Ven Compact - cotton cao cấp kết hợp cùng vải sợi bông tân tiến, tạo độ mềm mịn, giảm tối thiểu tình trạng xù lông, độ bền cao, dày dặn nhưng khả năng thấm hút vô cùng tốt.',
				color:
					'CREAM: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Dòng chữ kèm tên thương hiệu Levents đặc trưng với phối màu đen ở dưới họa tiết. Graphic FLOWERS WINDOW mới lạ với đa dạng màu sắc tone màu nhẹ nhàng như xanh dương, xanh lá, trắng, cam ,vàng được phối màu hài hòa tạo nên một họa tiết vô cùng bắt mắt cho áo. Graphic được sử dụng kỹ thuật vẽ tay tạo sự mới mẻ, linh hoạt kết hợp cùng kỹ thuật in lụa cao cấp đảm bảo độ sắc nét và độ bền cao cho sản phẩm.',
			},
		],
	},
	{
		id: '30',
		name: 'Áo Thun Levents Flowers Window/ Cream',
		color: '#FFFACD',
		colorName: ['kem', 'trắng', 'xanh biển', 'hồng', 'vàng'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lrtq8vamqfus93',
		categoryId: '1',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '590000',
		sale: '400000',
		unit: 'VNĐ',
		sold: 12,
		stock: 900,
		quantity: [''],
		desc: [
			{
				size: '0/1/2/3/4',
				productStructure:
					'Lì Ven Compact - chất vải siêu cao cấp của Nhà Lì. Lì Ven Compact - cotton cao cấp kết hợp cùng vải sợi bông tân tiến, tạo độ mềm mịn, giảm tối thiểu tình trạng xù lông, độ bền cao, dày dặn nhưng khả năng thấm hút vô cùng tốt.',
				color:
					'CREAM: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Dòng chữ kèm tên thương hiệu Levents đặc trưng với phối màu đen ở dưới họa tiết. Graphic FLOWERS WINDOW mới lạ với đa dạng màu sắc tone màu nhẹ nhàng như xanh dương, xanh lá, trắng, cam ,vàng được phối màu hài hòa tạo nên một họa tiết vô cùng bắt mắt cho áo. Graphic được sử dụng kỹ thuật vẽ tay tạo sự mới mẻ, linh hoạt kết hợp cùng kỹ thuật in lụa cao cấp đảm bảo độ sắc nét và độ bền cao cho sản phẩm.',
			},
		],
	},
	{
		id: '31',
		name: '[Mã FADEP195 giảm đến 30k đơn từ 99k] Áo thun unisex nam nữ local brand Outerity Kitty Kitty / Xanh Hồng - OTL1001',
		color: '#FFFACD',
		colorName: ['XanhHồng'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llakdn18ymkobd',
		categoryId: '1',
		brandId: 'out01',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['M', 'L', 'XL'],
		reviews: 600,
		price: '230000',
		sale: '179000',
		unit: 'VNĐ',
		sold: 12,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: 'S: Dài 69 Rộng 52.5 | 1m50 - 1m65, 45 - 55Kg. M: Dài 73 Rộng 55 | 1m60 - 1m75, 50 - 65Kg.	L: Dài 76.5 Rộng 57.5 | 1m7 - 1m8, 65Kg - 80Kg',
				productStructure:
					'chất vải siêu cao cấp của Nhà - cotton cao cấp kết hợp cùng vải sợi bông tân tiến, tạo độ mềm mịn, giảm tối thiểu tình trạng xù lông, độ bền cao, dày dặn nhưng khả năng thấm hút vô cùng tốt.',
				color:
					' Xanh Hồng: màu sắc trung tính, tôn da, dễ dàng phối đồ, phù hợp với mọi giới tính và có thể sử dụng hằng ngày',
				front:
					'Nếu chưa biết lựa size bạn có thể inbox để được chúng mình tư vấn.',
			},
		],
	},
	{
		id: '32',
		name: 'Calem Club - Quần Jeans Wash cạp cao Ống Rộng tôn dáng form thụng unisex',
		color: '#254117',
		colorName: ['xanh đen', 'đen', 'xám'],
		image:
			'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvbag4cq109939',
		categoryId: '7',
		brandId: 'lev99',
		isFav: true,
		isBrand: true,
		isSale: true,
		isNew: true,
		star: 4.0,
		size: ['S', 'M', 'L'],
		reviews: 600,
		price: '280000',
		sale: '179000',
		unit: 'VNĐ',
		sold: 656,
		stock: 900,
		quantity: '',
		desc: [
			{
				size: '2/3/4',
				productStructure:
					'Chất liệu: Jean dày dặn, đưng form quần khi mặc, không thô ráp, không co giãn',
				color: 'Màu sắc: tham khảo thêm trong phần phân loại ạ',
				front:
					'Quần ống rộng, cạp cao có thể mặc trên hoặc ngang rốn tùy sở thích, bảng size tham khảo ở dưới, khách có thể inbox để shop tư vấn ạ',
			},
		],
	},
];

export { categories, clothes, brands };
