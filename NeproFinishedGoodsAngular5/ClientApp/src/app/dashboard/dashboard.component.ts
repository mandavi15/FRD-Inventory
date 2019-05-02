import { Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  
})
/** dashboard component*/
export class DashboardComponent implements OnInit{
    /** dashboard ctor */
  PieChart1 = [];
  PieChart2 = [];
  PieChart3 = [];
  PieChart4 = [];
  PieChart5 = [];
  PieChart6 = [];
  ngOnInit() {

    this.PieChart1 = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Remaining Qty","Scan Qty"],
        datasets: [{
          label: '# of Votes',
          data: [5, 7],
          backgroundColor: [
            'rgba(65, 140, 241, 1)',
            'rgba(252, 181, 65, 1)'
            
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
           
          ],
          borderWidth: 1
        }]
      }
      
    });
    this.PieChart2 = new Chart('pieChart2', {
      type: 'pie',
      data: {
        labels: ["Remaining Qty", "Scan Qty"],
        datasets: [{
          label: '# of Votes',
          data: [4, 7],
          backgroundColor: [
            'rgba(65, 140, 241, 1)',
            'rgba(252, 181, 65, 1)'

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'

          ],
          borderWidth: 1
        }]
      }

    });

    this.PieChart3 = new Chart('pieChart3', {
      type: 'pie',
      data: {
        labels: ["Remaining Qty", "Scan Qty"],
        datasets: [{
          label: '# of Votes',
          data: [2, 1],
          backgroundColor: [
            'rgba(65, 140, 241, 1)',
            'rgba(252, 181, 65, 1)'

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'

          ],
          borderWidth: 1
        }]
      }

    });

    this.PieChart4 = new Chart('pieChart4', {
      type: 'pie',
      data: {
        labels: ["Remaining Qty", "Scan Qty"],
        datasets: [{
          label: '# of Votes',
          data: [5, 9],
          backgroundColor: [
            'rgba(65, 140, 241, 1)',
            'rgba(252, 181, 65, 1)'

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'

          ],
          borderWidth: 1
        }]
      }

    });
    this.PieChart5 = new Chart('pieChart5', {
      type: 'pie',
      data: {
        labels: ["Remaining Qty", "Scan Qty"],
        datasets: [{
          label: '# of Votes',
          data: [4, 4],
          backgroundColor: [
            'rgba(65, 140, 241, 1)',
            'rgba(252, 181, 65, 1)'

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'

          ],
          borderWidth: 1
        }]
      }

    });

    this.PieChart6 = new Chart('pieChart6', {
      type: 'pie',
      data: {
        labels: ["Remaining Qty", "Scan Qty"],
        datasets: [{
          label: '# of Votes',
          data: [4, 1],
          backgroundColor: [
            'rgba(65, 140, 241, 1)',
            'rgba(252, 181, 65, 1)'

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'

          ],
          borderWidth: 1
        }]
      }

    });
  }
}
