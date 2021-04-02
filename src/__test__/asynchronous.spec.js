import { fetchData, fetchDataWithnotCallback } from "../fetchData";
describe("Callbacks", () => {
  test("the data is peanut butter", (done) => {
    function callback(data) {
      try {
        expect(data).toBe("peanut butter");
        done();
      } catch (error) {
        done(error);
      }
    }
    fetchData(callback);
  });
  describe("Promises", () => {
    test("the data is peanut butter", () => {
      return fetchDataWithnotCallback().then((data) => {
        expect(data).toBe('peanut butter');
      });
    });
    test("the fetch fails with an error", () => {
      // expect.assertions(1);
      return fetchDataWithnotCallback().catch((e) => expect(e).toMatch("error"));
    });
  });
  describe('resolves && rejects', () => {
    test('the data is peanut butter', () => {
      return expect(fetchDataWithnotCallback()).resolves.toBe('peanut butter');
    });
    // test('the fetch fails with an error', () => {
    //   return expect(fetchDataWithnotCallback()).rejects.toMatch("error");
    // });

  })
  describe('Async/Await', () => {
    test('the data is peanut butter', async () => {
      const data = await fetchDataWithnotCallback();
      expect(data).toBe('peanut butter');
    });
    
    test('the fetch fails with an error', async () => {
      // expect.assertions(1);
      try {
        await fetchDataWithnotCallback();
      } catch (e) {
        expect(e).toMatch('error');
      }
    });
  })

  test('the data is peanut butter', async () => {
    await expect(fetchDataWithnotCallback()).resolves.toBe('peanut butter');
  });
  
  // test('the fetch fails with an error', async () => {
  //   await expect(fetchDataWithnotCallback()).rejects.toMatch('error');
  // });
  
  
});
