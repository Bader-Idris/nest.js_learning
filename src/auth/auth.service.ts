/* minimal code to create a service after creating the controller

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {} // or its name
*/

import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {}