import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionRepository);

    // faço a busca no banco de dados
    const transaction = await transactionsRepository.findOne(id);
    // não existe? retorno um erro
    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }
    // existe? deleto
    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
