'use strict';
import fs from 'fs';
import Args from './Args.js';
import HelperJson from "./HelperJson.js";
import Todo from './Todo.js';

let args=new Args;
args.setArg();
args.selectAction();

