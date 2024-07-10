const fs = require(`fs`);
const path = require(`path`);


const html = fs.readFileSync(path.resolve(__dirname, `../index.html`), `utf8`);

jest.dontMock(`fs`);

describe(`html content`, function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it(`contains a 2 link tag that references the stylesheets in resources/styles and Bootstrap 4`, function () {
    const styleElements = document.querySelectorAll(`head > link`);
    const styleSources = Array.from(styleElements)
      .filter((ele) => ele.rel === `stylesheet`)
      .map((ele) => ele.href);

    expect(styleElements.length).toBeGreaterThanOrEqual(2);
    expect(styleSources.map((src) => src.slice(-17))).toContain(
      `bootstrap.min.css`
    );
    expect(styleSources.map((src) => src.slice(-27))).toContain(
      `resources/styles/styles.css`
    );
  });



  it(`Button Bootstrap Classes`, function () {
    const welcomeFormButton = document.querySelector(`#welcome-screen > form > button`);
    const gameFormButton = document.querySelector(`#game-screen > form > button`);

    expect(welcomeFormButton).toHaveClass(`btn`);
    expect(welcomeFormButton).toHaveClass(`btn-primary`);
    expect(gameFormButton).toHaveClass(`btn`);
    expect(gameFormButton).toHaveClass(`btn-success`);
  });

  it(`select dropdown bootstrap class`, function () {
    const gameFormSelect = document.querySelector(`#game-screen > form > div > select`);

    expect(gameFormSelect).toHaveClass(`custom-select`);
  });

  it(`divs immediately under the forms should have a class name of form-group `, function () {
    const welcomeFormDiv = document.querySelector(`#welcome-screen > form > div`);
    const gameFormDiv = document.querySelector(`#game-screen > form > div`);

    expect(welcomeFormDiv).toHaveClass(`form-group`);
    expect(gameFormDiv).toHaveClass(`form-group`);
  });

  it(`username input should have a class of form-control `, function () {
    const welcomeFormInput = document.querySelector(`#welcome-screen > form > div > input`);

    expect(welcomeFormInput).toHaveClass(`form-control`);
  });

});
