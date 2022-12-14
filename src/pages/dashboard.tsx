import React from "react";
import { Header, Sidebar } from "../components";
import dynamic from "next/dynamic";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { Props } from "react-apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-11-24T00:00:00.000Z",
      "2022-11-25T00:00:00.000Z",
      "2022-11-26T00:00:00.000Z",
      "2022-11-27T00:00:00.000Z",
      "2022-11-28T00:00:00.000Z",
      "2022-11-29T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.6,
      opacityTo: 0.15,
    },
  },
} as Props;

const series = [
  {
    name: "series",
    data: [191, 55, 300, 28, 129, 103],
  },
];

const dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
        <Sidebar />

        <SimpleGrid
          flex={1}
          gap={4}
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={[6, 8]} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb={4}>
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box p={[6, 8]} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb={4}>
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default dashboard;
