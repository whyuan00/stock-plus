export const type = 'LineChart';

export const data = [
 ['D-100', 602],
 ['D-99', 614],
 ['D-98', 605],
 ['D-97', 731],
 ['D-96', 778],
 ['D-95', 781],
 ['D-94', 703],
 ['D-93', 845],
 ['D-92', 874],
 ['D-91', 861],
 ['D-90', 837],
 ['D-89', 828],
 ['D-88', 901],
 ['D-87', 916],
 ['D-86', 963],
 ['D-85', 946],
 ['D-84', 882],
 ['D-83', 661],
 ['D-82', 640],
 ['D-81', 609],
 ['D-80', 629],
 ['D-79', 657],
 ['D-78', 621],
 ['D-77', 595],
 ['D-76', 525],
 ['D-75', 502],
 ['D-74', 515],
 ['D-73', 409],
 ['D-72', 423],
 ['D-71', 422],
 ['D-70', 620],
 ['D-69', 636],
 ['D-68', 693],
 ['D-67', 750],
 ['D-66', 777],
 ['D-65', 788],
 ['D-64', 771],
 ['D-63', 583],
 ['D-62', 555],
 ['D-61', 555],
 ['D-60', 543],
 ['D-59', 509],
 ['D-58', 407],
 ['D-57', 422],
 ['D-56', 413],
 ['D-55', 408],
 ['D-54', 319],
 ['D-53', 305],
 ['D-52', 368],
 ['D-51', 347],
 ['D-50', 348],
 ['D-49', 748],
 ['D-48', 740],
 ['D-47', 711],
 ['D-46', 660],
 ['D-45', 658],
 ['D-44', 662],
 ['D-43', 706],
 ['D-42', 729],
 ['D-41', 747],
 ['D-40', 697],
 ['D-39', 626],
 ['D-38', 664],
 ['D-37', 630],
 ['D-36', 745],
 ['D-35', 713],
 ['D-34', 767],
 ['D-33', 839],
 ['D-32', 874],
 ['D-31', 846],
 ['D-30', 841],
 ['D-29', 844],
 ['D-28', 829],
 ['D-27', 738],
 ['D-26', 756],
 ['D-25', 742],
 ['D-24', 770],
 ['D-23', 818],
 ['D-22', 590],
 ['D-21', 560],
 ['D-20', 552],
 ['D-19', 527],
 ['D-18', 554],
 ['D-17', 522],
 ['D-16', 514],
 ['D-15', 479],
 ['D-14', 439],
 ['D-13', 784],
 ['D-12', 803],
 ['D-11', 788],
 ['D-10', 788],
 ['D-9', 797],
 ['D-8', 786],
 ['D-7', 801],
 ['D-6', 803],
 ['D-5', 816],
 ['D-4', 795],
 ['D-3', 788],
 ['D-2', 460],
 ['D-1', 596],
['D-Day', 596]
  
];

export const options = {
  chart: {
    title: 'title',
    subtitle: 'subtitle',
  },
  height: 400,
  animation:{
    // 지속시간
    duration:1000,
    easing:'in'
  },
  hAxis: {
    // viewWindow: {min:0, max: 10}, // 가로축의 최소값과 최대값 설정
  },
  vAxis: {
    viewWindow: {min: 300, max: 1000}, // 세로축의 최소값과 최대값 설정
    gridlines: {count: 0}
  },
  legend : {position: 'bottom'}
};
