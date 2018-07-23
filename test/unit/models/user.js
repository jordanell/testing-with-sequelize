import { assert } from 'chai';

import models from 'src/models';

import factories from 'test/factories';
import truncate from 'test/truncate';

describe('User model', () => {
  let user;

  beforeEach(async () => {
    await truncate();

    user = await factories.user();
  });

  it('should generate a user from the factory', async () => {
    assert.isOk(user.id);
  });

  it('should truncate the user table with each test', async () => {
    const count = await models.User.count();

    assert.equal(count, 1);
  });
});
