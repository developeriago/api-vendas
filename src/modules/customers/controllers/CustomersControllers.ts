import { Request, Response } from 'express';
import CreateCustomerService from '../services/CreateCustomerService';
import DeleteustomerService from '../services/DeleteCustomerService';
import ListCustomerService from '../services/ListCustomerService';
import ShowCustomerService from '../services/ShowCustomerService';
import updateCustomerService from '../services/UpdateCustomerService';

export default class CustomersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCustomers = new ListCustomerService();

    const customers = await listCustomers.execute();

    return response.json(customers);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCustomers = new ShowCustomerService();

    const customer = await showCustomers.execute({ id });

    return response.json(customer);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomers = new CreateCustomerService();

    const customer = await createCustomers.execute({
      name,
      email,
    });

    return response.json(customer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id } = request.params;

    const updateCustomer = new updateCustomerService();

    const customer = await updateCustomer.execute({
      id,
      name,
      email,
    });

    return response.json(customer);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCustomer = new DeleteustomerService();

    await deleteCustomer.execute({ id });

    return response.json([]);
  }
}
