import React from "react";
import { Container, Box } from "@mui/material";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
type Props = {
  current: number;
  onChange: (page: number) => void;
  total: number;
};

const UsePaginator = ({ current, onChange, total }: Props) => {
  return (
    <>
      <Container sx={{ py: 3 }}>
        <Box className="flex ai-c jc-c">
          <Pagination
            defaultPageSize={9}
            current={current}
            onChange={onChange}
            total={total}
            itemRender={(page, type, originalElement) => {
              if (type === "prev" || type === "next") {
                return;
              }
              return <Link to={`/blogs/page/${page}`}> {page} </Link>;
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default UsePaginator;
