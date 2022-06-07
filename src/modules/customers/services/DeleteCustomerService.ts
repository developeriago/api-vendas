import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IRequest {
  id: string;
}

class DeleteustomerService {
  public async execute({ id }: IRequest): Promise<void> {
    const customerRespository = getCustomRepository(CustomersRepository);

    const customer = await customerRespository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found');
    }

    await customerRespository.remove(customer);
  }
}

export default DeleteustomerService;
