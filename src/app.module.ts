import { Module } from '@nestjs/common';
import { EmployeeService } from './employees/employee.service';
import { EmployeeController } from './employees/employee.controller';
import { EmployeeModule } from './employees/employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
