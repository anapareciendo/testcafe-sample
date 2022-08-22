import { Selector } from 'testcafe';

fixture `Example 1`
    .page('https://devexpress.github.io/testcafe/example/');

test('Test 1', async t => {

}).page`https://devexpress.github.io/testcafe/blog/`;

test('Assertion with Selector', async t => {
    const developerNameInput = Selector('#developer-name');

    await t.typeText(developerNameInput, 'Peter');

    //the selector prefixed with the "await" operator doesn't update and produces unstable test results. Avoid it.
    const developerName = await Selector('#developer-name').value;

    await t
            .expect(developerName).eql('Peter')
            .typeText(developerNameInput, 'Jack')
            .expect(developerName).eql('Jack'); // fails
});