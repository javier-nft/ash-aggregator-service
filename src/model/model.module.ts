import { Module } from '@nestjs/common';
import { ModelService } from './model.service';
import { GraphQlModule } from 'src/common/graphql/graphql.module';
import { ApiConfigModule } from 'src/common/api-config/api.config.module';
import { XExchangeModule } from './xexchange/pool.module';
import { CachingModule } from 'src/common/caching/caching.module';
import { AshswapV1Module } from './ashswapv1/pool.module';
import { AshswapV2Module } from './ashswapv2/pool.module';
import { JexchangeModule } from './jexchange/pool.module';
import { JexchangeStableModule } from './jexchange_stable/pool.module';
import { MvxCommunicationModule } from 'src/common/mvx-communication/mvx.communication.module';
import { OneDexModule } from './onedex/pool.module';

@Module({
  imports: [
    GraphQlModule,
    ApiConfigModule,
    CachingModule,
    XExchangeModule,
    AshswapV1Module,
    AshswapV2Module,
    JexchangeModule,
    JexchangeStableModule,
    OneDexModule,
    MvxCommunicationModule,
  ],
  providers: [ModelService],
  exports: [ModelService],
})
export class ModelModule {}
