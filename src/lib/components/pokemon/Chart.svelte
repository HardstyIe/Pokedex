<script lang="ts">
	import {
		Chart as ChartJS,
		Legend,
		LineElement,
		PointElement,
		RadialLinearScale,
		Title,
		Tooltip
	} from 'chart.js';
	import { Radar } from 'svelte-chartjs';
	import { status } from '../../store';

	ChartJS.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement);
</script>

{#if $status}
	<Radar
		data={{
			labels: ['HP', 'ATK', 'DEF', 'ATKSpé', 'DEFSpé', 'VIT'],
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor: [
						'rgb(194, 116, 161)',
						'rgb(194, 116, 161)',
						'rgb(194, 116, 161)',
						'rgb(194, 116, 161)',
						'rgb(194, 116, 161)',
						'rgb(194, 116, 161)'
					],
					borderColor: [
						'rgb(194, 116, 161)',
						'rgb(194, 116, 161)',
						'rgb(194, 116, 161)',
						'rgb(194, 116, 161)',
						'rgb(194, 116, 161)',
						'rgb(194, 116, 161)'
					],
					fill: true,
					data: [
						$status[0].base_stat,
						$status[1].base_stat,
						$status[2].base_stat,
						$status[3].base_stat,
						$status[4].base_stat,
						$status[5].base_stat
					]
				}
			]
		}}
		options={{ responsive: true }}
	/>
{/if}
