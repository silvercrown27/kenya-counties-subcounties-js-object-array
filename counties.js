const countiesData = [
    {
      id: 30,
      name: 'Baringo',
      capital: 'Kabarnet',
      subCounties: ['Baringo Central', 'Baringo North', 'Baringo South', 'Eldama Ravine', 'Mogotio', 'Tiaty'],
    },
    {
      id: 36,
      name: 'Bomet',
      capital: 'Bomet',
      subCounties: ['Bomet Central', 'Bomet East', 'Chepalungu', 'Konoin', 'Sotik'],
    },
    {
      id: 39,
      name: 'Bungoma',
      capital: 'Bungoma',
      subCounties: ['Bumula', 'Kabuchai', 'Kanduyi', 'Kimilil', 'Mt Elgon', 'Sirisia', 'Tongaren', 'Webuye East', 'Webuye West'],
    },
    {
      id: 40,
      name: 'Busia',
      capital: 'Busia',
      subCounties: ['Budalangi', 'Butula', 'Funyula', 'Nambele', 'Teso North', 'Teso South'],
    },
    {
      id: 28,
      name: 'Elgeyo-Marakwet',
      capital: 'Iten',
      subCounties: ['Keiyo North', 'Keiyo South', 'Marakwet East', 'Marakwet West'],
    },
    {
      id: 14,
      name: 'Embu',
      capital: 'Embu',
      subCounties: ['Manyatta', 'Mbeere North', 'Mbeere South', 'Runyenjes'],
    },
    {
      id: 7,
      name: 'Garissa',
      capital: 'Garissa',
      subCounties: ['Daadab', 'Fafi', 'Garissa Township', 'Hulugho', 'Ijara', 'Lagdera', 'Balambala'],
    },
    {
      id: 43,
      name: 'Homa Bay',
      capital: 'Homa Bay',
      subCounties: ['Homabay Town', 'Kabondo', 'Karachwonyo', 'Kasipul', 'Mbita', 'Ndhiwa', 'Rangwe', 'Suba'],
    },
    {
      id: 11,
      name: 'Isiolo',
      capital: 'Isiolo',
      subCounties: ['Isiolo', 'Merti', 'Garbatulla'],
    },
    {
      id: 34,
      name: 'Kajiado',
      capital: 'Kajiado',
      subCounties: ['Isinya', 'Kajiado Central', 'Kajiado North', 'Loitokitok', 'Mashuuru'],
    },
    {
      id: 37,
      name: 'Kakamega',
      capital: 'Kakamega',
      subCounties: [
        'Butere', 'Kakamega Central', 'Kakamega East', 'Kakamega North', 'Kakamega South',
        'Khwisero', 'Lugari', 'Lukuyani', 'Lurambi', 'Matete', 'Mumias', 'Mutungu', 'Navakholo',
      ],
    },
    {
      id: 35,
      name: 'Kericho',
      capital: 'Kericho',
      subCounties: ['Ainamoi', 'Belgut', 'Bureti', 'Kipkelion East', 'Kipkelion West', 'Soin/Sigowet'],
    },
    {
      id: 22,
      name: 'Kiambu',
      capital: 'Kiambu',
      subCounties: [
        'Gatundu North', 'Gatundu South', 'Githunguri', 'Juja', 'Kabete', 'Kiambaa', 'Kiambu',
        'Kikuyu', 'Limuru', 'Ruiru', 'Thika Town', 'Lari',
      ],
    },
    {
      id: 3,
      name: 'Kilifi',
      capital: 'Kilifi',
      subCounties: ['Ganze', 'Kaloleni', 'Kilifi North', 'Kilifi South', 'Magarini', 'Malindi', 'Rabai'],
    },
    {
      id: 20,
      name: 'Kirinyaga',
      capital: 'Kerugoya/Kutus',
      subCounties: ['Kirinyaga Central', 'Kirinyaga East', 'Kirinyaga West', 'Mwea East', 'Mwea West'],
    },
    {
      id: 45,
      name: 'Kisii',
      capital: 'Kisii',
      subCounties: [], // No specified sub-counties in the provided data
    },
    {
      id: 42,
      name: 'Kisumu',
      capital: 'Kisumu',
      subCounties: ['Kisumu Central', 'Kisumu East', 'Kisumu West', 'Muhoroni', 'Nyakach', 'Nyando', 'Seme'],
    },
    {
      id: 15,
      name: 'Kitui',
      capital: 'Kitui',
      subCounties: [
        'Kitui West', 'Kitui Central', 'Kitui Rural', 'Kitui South', 'Kitui East',
        'Mwingi North', 'Mwingi West', 'Mwingi Central',
      ],
    },
    {
      id: 2,
      name: 'Kwale',
      capital: 'Kwale',
      subCounties: ['Kinango', 'Lunga Lunga', 'Msambweni', 'Matuga'],
    },
    {
      id: 31,
      name: 'Laikipia',
      capital: 'Rumuruti',
      subCounties: ['Laikipia Central', 'Laikipia East', 'Laikipia North', 'Laikipia West', 'Nyahururu'],
    },
    {
      id: 5,
      name: 'Lamu',
      capital: 'Lamu',
      subCounties: ['Lamu East', 'Lamu West'],
    },
    {
      id: 16,
      name: 'Machakos',
      capital: 'Machakos',
      subCounties: ['Kathiani', 'Machakos Town', 'Masinga', 'Matungulu', 'Mavoko', 'Mwala', 'Yatta'],
    },
    {
      id: 17,
      name: 'Makueni',
      capital: 'Wote',
      subCounties: ['Kaiti', 'Kibwezi West', 'Kibwezi East', 'Kilome', 'Makueni', 'Mbooni'],
    },
    {
      id: 9,
      name: 'Mandera',
      capital: 'Mandera',
      subCounties: ['Banissa', 'Lafey', 'Mandera East', 'Mandera North', 'Mandera South', 'Mandera West'],
    },
    {
      id: 10,
      name: 'Marsabit',
      capital: 'Marsabit',
      subCounties: ['Laisamis', 'Moyale', 'North Hor', 'Saku'],
    },
    {
      id: 12,
      name: 'Meru',
      capital: 'Meru',
      subCounties: [
        'Buuri', 'Igembe Central', 'Igembe North', 'Igembe South', 'Imenti Central', 'Imenti North',
        'Imenti South', 'Tigania East', 'Tigania West',
      ],
    },
    {
      id: 44,
      name: 'Migori',
      capital: 'Migori',
      subCounties: [
        'Awendo', 'Kuria East', 'Kuria West', 'Mabera', 'Ntimaru', 'Rongo', 'Suna East', 'Suna West', 'Uriri',
      ],
    },
    {
      id: 1,
      name: 'Mombasa',
      capital: 'Mombasa City',
      subCounties: ['Changamwe', 'Jomvu', 'Kisauni', 'Likoni', 'Mvita', 'Nyali'],
    },
    {
      id: 21,
      name: 'Murang’a',
      capital: 'Murang’a',
      subCounties: [
        'Gatanga', 'Kahuro', 'Kandara', 'Kangema', 'Kigumo', 'Kiharu', 'Mathioya', 'Murang’a South',
      ],
    },
    {
      id: 47,
      name: 'Nairobi',
      capital: 'Nairobi City',
      subCounties: [
        'Dagoretti North', 'Dagoretti South', 'Embakasi Central', 'Embakasi East', 'Embakasi North',
        'Embakasi South', 'Embakasi West', 'Kamukunji', 'Kasarani', 'Kibra', 'Lang’ata', 'Makadara',
        'Mathare', 'Roysambu', 'Ruaraka', 'Starehe', 'Westlands',
      ],
    },
    {
      id: 32,
      name: 'Nakuru',
      capital: 'Nakuru',
      subCounties: [
        'Bahati', 'Gilgil', 'Kuresoi North', 'Kuresoi South', 'Molo', 'Naivasha',
        'Nakuru Town East', 'Nakuru Town West', 'Njoro', 'Rongai', 'Subukia',
      ],
    },
    {
      id: 29,
      name: 'Nandi',
      capital: 'Kapsabet',
      subCounties: ['Aldai', 'Chesumei', 'Emgwen', 'Mosop', 'Nandi Hills', 'Tindiret'],
    },
    {
      id: 33,
      name: 'Narok',
      capital: 'Narok',
      subCounties: ['Narok East', 'Narok North', 'Narok South', 'Narok West', 'Transmara East', 'Transmara West'],
    },
    {
      id: 46,
      name: 'Nyamira',
      capital: 'Nyamira',
      subCounties: ['Borabu', 'Manga', 'Masaba North', 'Nyamira North', 'Nyamira South'],
    },
    {
      id: 18,
      name: 'Nyandarua',
      capital: 'Ol Kalou',
      subCounties: ['Kinangop', 'Kipipiri', 'Ndaragwa', 'Ol-Kalou', 'Ol Joro Orok'],
    },
    {
      id: 19,
      name: 'Nyeri',
      capital: 'Nyeri',
      subCounties: ['Kieni East', 'Kieni West', 'Mathira East', 'Mathira West', 'Mukurweini', 'Nyeri Town', 'Othaya', 'Tetu'],
    },
    {
      id: 25,
      name: 'Samburu',
      capital: 'Maralal',
      subCounties: ['Samburu East', 'Samburu North', 'Samburu West'],
    },
    {
      id: 41,
      name: 'Siaya',
      capital: 'Siaya',
      subCounties: ['Alego Usonga', 'Bondo', 'Gem', 'Rarieda', 'Ugenya', 'Unguja'],
    },
    {
      id: 6,
      name: 'Taita-Taveta',
      capital: 'Voi',
      subCounties: ['Mwatate', 'Taveta', 'Voi', 'Wundanyi'],
    },
    {
      id: 4,
      name: 'Tana River',
      capital: 'Hola',
      subCounties: ['Bura', 'Galole', 'Garsen'],
    },
    {
      id: 13,
      name: 'Tharaka-Nithi',
      capital: 'Chuka',
      subCounties: ['Tharaka North', 'Tharaka South', 'Chuka', 'Igambango’mbe', 'Maara', 'Chiakariga and Muthambi'],
    },
    {
      id: 26,
      name: 'Trans-Nzoia',
      capital: 'Kitale',
      subCounties: ['Cherangany', 'Endebess', 'Kiminini', 'Kwanza', 'Saboti'],
    },
    {
      id: 23,
      name: 'Turkana',
      capital: 'Lodwar',
      subCounties: ['Loima', 'Turkana Central', 'Turkana East', 'Turkana North', 'Turkana South'],
    },
    {
      id: 27,
      name: 'Uasin Gishu',
      capital: 'Eldoret',
      subCounties: ['Ainabkoi', 'Kapseret', 'Kesses', 'Moiben', 'Soy', 'Turbo'],
    },
    {
      id: 38,
      name: 'Vihiga',
      capital: 'Vihiga',
      subCounties: ['Emuhaya', 'Hamisi', 'Luanda', 'Sabatia', 'Vihiga'],
    },
    {
      id: 8,
      name: 'Wajir',
      capital: 'Wajir',
      subCounties: ['Eldas', 'Tarbaj', 'Wajir East', 'Wajir North', 'Wajir South', 'Wajir West'],
    },
    {
      id: 24,
      name: 'West Pokot',
      capital: 'Kapenguria',
      subCounties: ['Central Pokot', 'North Pokot', 'Pokot South', 'West Pokot'],
    }
]

export default countiesData;
