describe('Unit testing randomColor', function() {

  colorSet1 = ['#8bd343', '#a31f44', '#f23aa5', '#25bfd1', '#b9dd5d', '#b2ffd3', '#017984', '#c4214f', '#fcd928', '#55dbd2']
  colorSet2 = ['#7ed65e', '#d8d82f', '#46e2a1', '#77eaea', '#d062fc', '#8e6af2', '#604ce0', '#e5d177', '#9df2e2', '#efcb8d']

  it('should use a seed', function () {
    expect(randomColor({seed: 1, count: 10})).toEqual(colorSet1)
    expect(randomColor({seed: 2, count: 10})).toEqual(colorSet2)
  })

})