"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type Project = {
  title: string;
  description: string;
  long_description: string;
  technologies: string[];
  website: string;
  github: string;
};

interface DataTableProps {
  data: Project[];
}

export function DataTable({ data }: DataTableProps) {
  const columns: ColumnDef<Project>[] = [
    {
      accessorKey: "title",
      header: "Project",
      cell: ({ row }) => {
        const project = row.original;
        return (
          <div>
            <h3 className=" text-2xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.description}</p>
            <p className="text-base mt-2">{project.long_description}</p>
            <div className="mt-2">
              <span className="text-xs">
                {project.technologies.join(" | ")}
              </span>
            </div>
            <div className="mt-2 text-end ">
              <a
                href={project.website}
                className="text-blue-500 hover:underline mr-4"
              >
                Website
              </a>
              <a
                href={project.github}
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Search Projects..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm "
        />
      </div>
      <div className="rounded-md border-b">
        <Table>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className="h-24 text-center">No results.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
