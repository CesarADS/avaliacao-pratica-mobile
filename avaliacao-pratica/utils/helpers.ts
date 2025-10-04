export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const generateId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

export const validateBemData = (nome: string, descricao: string, valor: string) => {
  const errors: string[] = [];

  if (!nome.trim()) {
    errors.push('Nome é obrigatório');
  }

  if (!descricao.trim()) {
    errors.push('Descrição é obrigatória');
  }

  const valorNumerico = parseFloat(valor.replace(',', '.'));
  if (isNaN(valorNumerico) || valorNumerico <= 0) {
    errors.push('Valor deve ser um número válido maior que zero');
  }

  return {
    isValid: errors.length === 0,
    errors,
    valorNumerico: isNaN(valorNumerico) ? 0 : valorNumerico,
  };
};