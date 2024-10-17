import CallDetailBusiness from '../businesses/CallDetailBusiness.js';
import Response from '#src/core/response.js';

class CallDetailController {
  constructor() {
    this.callDetailBusiness = new CallDetailBusiness();
    this.response = new Response();
  }

  async process(req, res) {
    const { number } = req.params;

    const process = await this.callDetailBusiness.process(number);
    if (!Object.keys(process).length) {
      res.status(404).send(
        this.response.send(
          res.locals.token,
          [],
          'Data not found',
        ),
      );

      return false;
    }

    res.send(
      this.response.send(
        res.locals.token,
        process,
      ),
    );
  }
}

export default CallDetailController;
