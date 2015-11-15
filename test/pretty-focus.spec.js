describe("A DOM element", function() {

  it("has a class of 'focus-disabled'", function() {
    var el = document.createElement('div');
    el.className = "focus-disabled";
    var hasClass = hasClass(el, 'focus-disabled');
    expect(hasClass).toBe(true);
  });

  it("does not have a class of 'focus-disabled'", function() {
    var el = document.createElement('div');
    el.className = "";
    var hasClass = hasClass(el, 'focus-disabled');
    expect(hasClass).toBe(false);
  });

});
