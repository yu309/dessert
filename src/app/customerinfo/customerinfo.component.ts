import { Component, OnInit } from '@angular/core';
import { appPath } from '../app-path.const';;
@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.scss']
})
export class CustomerinfoComponent implements OnInit {
  path= appPath

  constructor() { }

  ngOnInit(): void {
  }

}
