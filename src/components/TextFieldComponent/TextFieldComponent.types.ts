import type { TextFieldProps } from '@mui/material';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface TextFieldComponentProps<TFieldValues extends FieldValues>
  extends Omit<TextFieldProps, 'name' | 'value' | 'onChange' | 'defaultValue'> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  format?: (value: string) => string;
  parse?: (value: string) => string;
}
