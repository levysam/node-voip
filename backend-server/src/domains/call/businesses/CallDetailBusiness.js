import CallDetailRepository from '../repositories/CallDetailRepository.js';

class CallDetailBusiness {
  constructor() {
    this.callDetailRepository = new CallDetailRepository();
  }

  process(id) {
    return id;
  }
}

export default CallDetailBusiness;
