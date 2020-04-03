// this is for provider

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {CustomHttpInterceptor} from './custom-http-interceptor';

export const httpInterceptProvider = [
    {
        provide:HTTP_INTERCEPTORS,
        useClass:CustomHttpInterceptor,
        multi:true
    }
]